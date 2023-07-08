const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')
const Cliente = addKeyword(['cliente','asesor']) 
.addAnswer(['Se a creado un grupo con el Asesor'])
.addAction(async (ctx, {provider}) => {
    const refProvider = await provider.getInstance()
    await refProvider.groupCreate(`Asesor - Selfie Mirror`,[
        `${ctx.from}@s.whatsapp.net`,
        '5491140054474@s.whatsapp.net'
    ])})
.addAnswer('El Chat Finalizo')
const flowsAlquiler = addKeyword(['alquiler', 'alquilar', 'cumple','servicios']
/*  
,{capture: true},
  async (ctx, {fallBack,flowDynamic}) => 
   {
      var geocoder = new google.maps.Geocoder();
      
      var address1 = "Ramos Mejía, Argentina";
      var address2 =     (ctx.body);
      
      geocoder.geocode({address: address1}, function(results1, status1) {
        if (status1 === google.maps.GeocoderStatus.OK) {
          var location1 = results1[0].geometry.location;
          
          geocoder.geocode({address: address2}, function(results2, status2) {
            if (status2 === google.maps.GeocoderStatus.OK) {
              var location2 = results2[0].geometry.location;
              
              var distance = google.maps.geometry.spherical.computeDistanceBetween(location1, location2);
              var distanceInKm = (distance / 1000)*250;
			  var roun = Math.round(distanceInKm / 5000) * 5000;
flowDynamic("La distancia entre " + address1 + " y " + address2 + " es de " + Math.round(distanceInKm/250) + " kilómetros. Y los traslados tienen un valor de $ "+ roun +" Pesos")
          }
        }
    
)}
    }
     )}*/
     ).addAnswer(
    
    ['👌Te envio la info de alquiler.', ])
.addAnswer([
'*Espejo Magico Selfie Mirror*',
'\nEl servicio dura 2 horas. Durante ese tiempo no existe un limite de cantidaad de copias.c ',
'Incluye funciones de filtros, filtros de snapchat, juegos y Stickers',
'Los elementos de decoracion como marcos y ordenadores de fila, tenemos distintos modelos para su eleccion.',
'Al finalizar la sesion aparecera un codigo QR que al escanearlo con la camara del celular pueden descargar o compartir la foto en el momento',
'Valor Servicio por 2 Horas $ 50.000',
'El valor de la Hora adicional es de $ 25.000', ])
.addAnswer('Espejo Magico Selfie Mirror',{
media: ' https://espejoselfiemirror.com.ar/images/banner3.jpg'})
.addAnswer([
'*360 Super Slow.*',
'\nEl servicio dura 2 horas. Durante ese tiempo no existe limite de caputras.',
'Los videos son filmados y compartidos en el momento ya editados automaticamente',
'Incluye accesorios (pelucas, pistola lanza burbujas, cotillon)',
'El valor del servico de 2 horas es de $ 50.000', 
'El valor de la Hora adicional es de $ 25.000', ])
.addAnswer('Plataforma 360 Super Slow',{
media: 'https://espejoselfiemirror.com.ar/images/banner.jpg', }) 
.addAnswer([
 '🔒Los valores se congelan y la fecha se reseva solo al señar el servicio', 
 '🚚El valor no incluye traslados',
 '🚩*Servicio solo disponible para CABA y GBA*', ])
 .addAnswer('Showroom',{
    media: ' https://espejoselfiemirror.com.ar/images/video.mp4'})
.addAnswer('Si desea continuar con la reserva escriba *Asesor*',null,[Cliente])

const flowVenta = addKeyword(['venta', 'vender', 'comprar', 'compra'])
.addAnswer(
'👌 Te envio la info de Venta.')
.addAnswer(['*Espejo Magico Selfie Mirror*',
'\nLos equipos vienen completos. Tenemos distintas opciones segun su uso.',
'El equipo Slim mide 15 cm de profundidad y esta preparado para ser transportado sin ningun riesgo y puede ser transportado en un coche. El valor de este es $700.000',
'Cuenta con un software propio autoactualizable que permite configurar cantidad de fotos elegidas, Agregar Stickers, filtros y Firmas.','No incluye Impresora 🖨️'])
.addAnswer(['Equipo Slim Selfie Mirror'],{
media: 'https://espejoselfiemirror.com.ar/images/banner4.jpg'})
.addAnswer(['*Plataforma 360 Super Slow*',
 '\nLa plataforma incluye motor, control remoto, variador de velocidad, soporte para celular o Gopro y Aro de Led',
  'El Valor en 70 o 90 cm es de $170.000',
 'El valor en 110 cm es de $200.000'  ] 
).addAnswer(
 '✈️*Enviamos a todo el Pais.*')
 .addAnswer(['Plataforma 360 Super Slow'], {
media: 'https://espejoselfiemirror.com.ar/images/banner.jpg'})
.addAnswer('Showroom',{
media: ' https://espejoselfiemirror.com.ar/images/video.mp4'})
.addAnswer('Si desea continuar con la compra escriba *Asesor*',null,null,[Cliente,flowsAlquiler])

                        

         // addKeyword(['Hola', 'ola', 'Facebook', 'Instagram','info','precio', 'valor','vale','valen','costo','precios','buenas','buen'])
const flowPrincipal =addKeyword(EVENTS.WELCOME)
    .addAnswer([' 🙌 Hola, Como estas? Te agradezco por comunicarte con *Selfie Mirror*','Si su consulta es por informacion de nuestros servicios solo escriba la palabra: *Alquiler* o *Venta* y obtendra la informacion inmediatamente.','Si usted es cliente escriba la palabra *Cliente*'],{  capture: true},
async (ctx, {fallBack,flowDynamic}) => 
{switch (ctx.body) {
case 'Alquiler':
flowsAlquiler
  break;
  case 'alquiler':
    flowsAlquiler
              break;
        case 'venta':
             flowVenta
              break;
case 'Venta':
 flowVenta
  break;
  case 'Cliente':
  Cliente
    break;
    case 'cliente':
        Cliente
    break;
default:
return fallBack({body: 'No estoy configurado para entender eso. Por favor solo escriba la palabra. *Alquiler*, *Venta* o *Cliente*'})
break}},

[flowVenta, flowsAlquiler,Cliente])


const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowVenta,flowsAlquiler,Cliente])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
    