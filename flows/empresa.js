const {addKeyword} = require('@bot-whatsapp/bot')
const flowEmpresa = addKeyword(['ASESOR DE VENTAS'], {sensitive: true})
  .addAnswer('SELFIE MIRROR \nhttps://www.espejoselfiemirror.com.ar')  
  addAnswer('FILA VIP \nhttps://filavip.ar')  
  addAnswer('*Av de Mayo 1624  - RAMOS MEJÍA - Buenos Aires*' )
  addAnswer('  Nuestros horarios de atención son: de Lunes a Viernes de 10hs a 17hs' )
  addAnswer('Selfie Mirror', {media: 'video.mp4'})
return  gotoFlow(MenuB);
module.exports(flowEmpresa)