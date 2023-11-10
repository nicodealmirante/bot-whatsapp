require('dotenv').config()
const { createBot, createProvider, createFlow, addKeyword,EVENTS } = require('@bot-whatsapp/bot')
const Queue = require('queue-promise')
const mimeType = require('mime-types')
const fs = require('node:fs/promises');
const MetaProvider = require('@bot-whatsapp/provider/meta')
const MockAdapter = require('@bot-whatsapp/database/mock')
const ServerHttp = require('./src/http')
const ChatwootClass = require('./src/chatwoot/chatwoot.class')
const { handlerMessage } = require('./src/chatwoot')
const express = require('express')
const PORT = process.env.PORT ?? 3001

let data



///////////////////         FLOWS



const flowEmpresa = require('./flows/empresa.js')
const flowAlquiler = require('./flows/alquiler.js')
const flowVenta = require('./flows/venta.js')
const {evHola,MenuB, evAudio, Asesor  } = require('./flows/welcome.js')
const serverHttp = new ServerHttp(PORT)


const chatwoot = new ChatwootClass({
    account: process.env.account,
    token: process.env.token,
    endpoint: process.env.endpoint
    
})

const queue = new Queue({
    concurrent: 1,
    interval: 500
})




const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([evHola,flowAlquiler,flowEmpresa,flowVenta.evAudio,MenuB,Asesor])

    const adapterProvider = createProvider(MetaProvider, {
        jwtToken: process.env.JWT_TOKEN,
        numberId: process.env.NUMBER_ID,
        verifyToken: process.env.VERIFY_TOKEN,
        version: 'v16.0'
    }
    )  
        const bot = await createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        })
    
        serverHttp.initialization(bot)
    
        /**
         * Los mensajes entrantes al bot (cuando el cliente nos escribe! <---)
         */
    
        adapterProvider.on('message', (payload) => {
            console.log('payload', payload)
            queue.enqueue(async () => {
                
                try {
    
                    const attachment = []
                    /**
                     * Determinar si el usuario esta enviando una imagen o video o fichero
                     * luego puedes ver los fichero en http://localhost:3001/file.pdf o la extension
                     */
                    if (payload?.body.includes('_event_')) {
                        const mime = payload?.message?.imageMessage?.mimetype ?? payload?.message?.videoMessage?.mimetype ?? payload?.message?.documentMessage?.mimetype;
                        const extension = mimeType.extension(mime);
                        const buffer = await downloadMediaMessage(payload, "buffer");
                        const fileName = `file-${Date.now()}.${extension}`
                        const pathFile = `${process.cwd()}/public/${fileName}`
                        await fs.writeFile(pathFile, buffer);
                        console.log(`[FIECHERO CREADO] http://localhost:3001/${fileName}`)
                        attachment.push(pathFile)
                    }
    
                    await handlerMessage({
                        phone: payload.from,
                        name: payload.pushName,
                        message: payload.body,
                        attachment,
                        mode: 'incoming'
                    }, chatwoot)
                } catch (err) {
                    console.log('ERROR', err)
                }
            });
        })
    
        /**
         * Los mensajes salientes (cuando el bot le envia un mensaje al cliente ---> )
         */
        bot.on('send_message', (payload) => {
            queue.enqueue(async () => {
                await handlerMessage({
                    phone: payload.numberOrId,
                    name: payload.pushName,
                    message: payload.answer,
                    mode: 'outgoing'
                }, chatwoot)
            })
        })
}
    
    main()
    
