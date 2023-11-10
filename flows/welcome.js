const {EVENTS, addKeyword} = require('@bot-whatsapp/bot')

module.exports = addKeyword(EVENTS.WELCOME)

.addAnswer("Hola. Soy Luna, una IA encargada de responder instantaneamente preguntas frecuentes. Para hablar con un asesor continua al\n +5491140054474 - Nicolás")
.addAction({capture: false, 
      buttons: [
          {body: 'INFO. ALQUILAR'},
          {body: 'INFO. COMPRAR'},
          {body: 'ASESOR DE VENTAS'},
      ], delay: 2000 , idle: 2000 }, // idle: 2000 = 2 segundos
      async (ctx, { gotoFlow, inRef, provider }) => {
      data2=ctx.body
      
      await provider.sendtext(mywhatsa, `*VENTA* \nNumero: +${ctx.from}\n Nombre: *${ctx.pushName}n\INFO: \n*${ctx.body}*`)
      
          if (ctx?.idleFallBack) {
              return gotoFlow(flujoFinal)
          }
      }
      )
      
      const flujoFinal = addKeyword('HH').addAnswer('Sigue ahi? Quiere que me comunique despues? Le dejo mi telefono *+5491140054474 - NICOLAS*')

    /*  module.exports = addKeyword(EVENTS.VOICE_NOTE)
.addAnswer('Disculpe, no puedo escuchar audios. Por favor utilice solo texto.')
.addAction(async(ctx, {gotoFlow}) => { 
return gotoFlow(MenuB)})
*/




