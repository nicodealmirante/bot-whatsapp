const {addKeyword} = require('@bot-whatsapp/bot')
module.exports = addKeyword('ASESOR DE VENTAS', {sensitive: true})
  .addAnswer('SELFIE MIRROR \nhttps://www.espejoselfiemirror.com.ar')  
  .addAnswer('FILA VIP \nhttps://filavip.ar')  
  .addAnswer('*Av de Mayo 1624  - RAMOS MEJÍA - Buenos Aires*' )
  .addAnswer('  Nuestros horarios de atención son: de Lunes a Viernes de 10hs a 17hs' )
  .addAnswer('Selfie Mirror', {media: 'video.mp4'})

.addAction(async(ctx, {gotoFlow}) => {     // idle: 2000 = 2 segundos
return  gotoFlow(MenuB);
})