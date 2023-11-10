const { addKeyword, EVENTS,provider } = require("@bot-whatsapp/bot")
module.exports =  addKeyword("MENU")
.addAnswer("MENU", {capture: false, 
  buttons: [
      {body: 'VOLVER'},
      {body: 'INFO. EMPRESA'},
      {body: 'ASESOR DE VENTAS'},
  ], delay: 2000 } ) 

const Asesor = addKeyword("ASESOR DE VENTAS")
.addAnswer('',{ capture: true, idle: 2000 }, // idle: 2000 = 2 segundos
async (ctx, { gotoFlow, inRef, provider }) => {
data2=ctx.body

await provider.sendtext(mywhatsa, `*DIRECTO* \nNumero: +${ctx.from}\n Nombre: *${ctx.pushName}n\INFO: \n*${ctx.body}*`)

    if (ctx?.idleFallBack) {
        return gotoFlow(flujoFinal)
    }})

const flujoFinal = addKeyword("adsasd").addAnswer('Sigue ahi? Quiere que me comunique despues? Le dejo mi telefono *+5491140054474 - NICOLAS*')