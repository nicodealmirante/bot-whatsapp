const {EVENTS, addKeyword} = require('@bot-whatsapp/bot')

const evHola = addKeyword(EVENTS.WELCOME)

.addAnswer("Hola. Soy Luna, una IA encargada de responder instantaneamente preguntas frecuentes. Para hablar con un asesor continua al\n +5491140054474 - Nicolás")
.addAction({capture: false, 
      buttons: [
          {body: 'INFO. ALQUILAR'},
          {body: 'INFO. COMPRAR'},
          {body: 'ASESOR DE VENTAS'},
      ], delay: 2000 } )  


      const MenuB = addKeyword("MENU")
      .addAnswer("MENU", {capture: false, 
        buttons: [
            {body: 'VOLVER'},
            {body: 'INFO. EMPRESA'},
            {body: 'ASESOR DE VENTAS'},
        ], delay: 2000 } ) 

   const Asesor = addKeyword("ASESOR DE VENTAS")
.addAction(



)

const evAudio = addKeyword(EVENTS.VOICE_NOTE)
.addAnswer('Disculpe, no puedo escuchar audios. Por favor utilice solo texto.')
.addAction(async(ctx, {gotoFlow}) => { 
return gotoFlow(MenuB)})



module.exports(evAudio,evHola,MenuB,Asesor)


