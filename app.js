const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

const Cliente = addKeyword(['cliente','asesor']) 
.addAction(async (ctx, {provider}) => {
  /**   const refProvider = await provider.getInstance()
    await refProvider.groupCreate(`Asesor - Selfie Mirror`,[
        `${ctx.from}@s.whatsapp.net`,
        '5491140054474@s.whatsapp.net'
    ],{body:'sdf'}
  )  */
   const refProvider = await provider.getInstance();
  const group = await refProvider.groupCreate(`Asesor - Selfie Mirror`, [  `${ctx.from}@s.whatsapp.net`, '5491140054474@s.whatsapp.net'])
  refProvider.sendMessage(group.id, { text:  `Grupo creado ${group.id} con el cliente contacto numero +${ctx.from}.` }) // say hello to everyone on the group
  console.log ("created group with id: " + group.id)
  })


.addAnswer('Grupo creado con el agente. Gracias por comunicarse.')

/*const nop= addKeyword(['no']) 
.addAnswer('Gracias por comunicarte con nosotros ')*/

const audiono = addKeyword(EVENTS.VOICE_NOTE)
.addAnswer('Disculpe, no puedo escuchar audios. Por favor utilice solo texto.')


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
'\Diseño elegante: Nuestro espejo mágico tiene un diseño moderno y elegante que se adapta a cualquier tipo de evento.',
'Su apariencia sofisticada agrega un toque especial al ambiente.',
'\nAccesorios y decoración: Contamos con una variedad de accesorios y elementos decorativos para personalizar aún ',
'más la experiencia. Puedes elegir entre diferentes marcos, sombreros, anteojos, pizarras con mensajes divertidos' ,
'y más. Estos elementos permiten que los invitados se diviertan y creen fotos únicas.',
'\nTamaño y portabilidad: El espejo mágico tiene dimensiones compactas que facilitan su transporte e instalación en ',
'diferentes espacios. Es lo suficientemente versátil como para adaptarse a salones de eventos, fiestas en exteriores ',
'y otros lugares.',
'\nOpciones de software: Nuestro espejo mágico viene con un software propio que ofrece una amplia gama de funciones ',
'y personalización. Puedes elegir entre diferentes plantillas de diseño, agregar efectos especiales a las fotos y configurar ',
'opciones de impresión según tus preferencias.',
'\nTiempo de alquiler: El tiempo de alquiler del espejo mágico es flexible y se adapta a las necesidades de tu evento.',
' Puedes contratarlo por horas o por el tiempo que consideres necesario para brindar una experiencia completa a tus invitados.',
'\nRecuerda que nuestros servicios incluyen el montaje, desmontaje y la asistencia de personal capacitado durante todo' ,
'el evento. Estamos comprometidos en asegurar que tus invitados disfruten al máximo de la experiencia con el espejo mágico.',
'Valor Servicio por 2 Horas $ 50.000 (base)',
'El valor de la Hora adicional es de $ 25.000', ])
.addAnswer('Espejo Magico Selfie Mirror',{
media: ' https://admin.espejoselfiemirror.com.ar/images/banner3.jpg'}) 
.addAnswer([
'*360 Super Slow.*',
'\nEl servicio dura 2 horas. Durante ese tiempo no existe limite de caputras.',
'Los videos son filmados y compartidos en el momento ya editados automaticamente',
'Incluye accesorios (pelucas, pistola lanza burbujas, cotillon)',
'El valor del servico de 2 horas es de $ 50.000', 
'El valor de la Hora adicional es de $ 25.000', ])
.addAnswer('Plataforma 360 Super Slow',{
media: 'https://admin.espejoselfiemirror.com.ar/images/banner.jpg', }) 
.addAnswer([
 '🔒Los valores se congelan y la fecha se reseva solo al señar el servicio', 
 '🚚El valor no incluye traslados',
 '🚩*Servicio solo disponible para CABA y GBA*', ])
 .addAnswer('Showroom',{
    media: ' https://admin.espejoselfiemirror.com.ar/images/video.mp4'})
    .addAnswer(['El vendedor esta disponible para asesorarlo mejor. Podria decirme su nombre asi lo comunico?'], {capture: true})
    .addAnswer('Grupo creado con el agente. Gracias por comunicarse.')
    .addAction(async (ctx, {provider}) => {
      
      const refProvider = await provider.getInstance();
      const group = await refProvider.groupCreate(`Asesor - Selfie Mirror`, [  `${ctx.from}@s.whatsapp.net`, '5491140054474@s.whatsapp.net'])
      refProvider.sendMessage(group.id, { text:  `Grupo creado ${group.id} con *${ctx.body}* contacto numero  +${ctx.from}. Por Alquiler` }) // say hello to everyone on the group
 console.log ("created group with id: " + group.id)
      }
      )

      

    
const flowVenta = addKeyword(['venta', 'vender', 'comprar', 'compra'])
.addAnswer(
'👌 Te envio la info de Venta.')
.addAnswer(['*Espejo Magico Selfie Mirror*',
'\nEl Espejo Mágico de Selfie Mirror cuenta con una cámara web de alta calidad, vidrio templado resistente, una Mini PC y un',
'televisor LED de 32 pulgadas. Estas características garantizan una experiencia de alta definición para capturar momentos',
' especiales.',
'\nSu diseño compacto y portátil, con dimensiones de 126 cm de alto x 70 cm de ancho y 20 cm de profundidad en el modelo',
' Slim, permite transportarlo fácilmente en cualquier vehículo. Esto brinda una gran versatilidad y conveniencia para eventos ',
 'y fiestas.',
'\nLa facilidad de uso es una de las ventajas clave del Espejo Mágico. Simplemente tienes que enchufarlo y presionar el ',
'botón de encendido para que empiece a funcionar. Esto agiliza la instalación y permite que los eventos comiencen rápidamente.',
'\nEs importante mencionar que el Selfie Mirror no incluye una impresora, pero está preparado para funcionar con cualquier ',
'impresora que se adapte a las necesidades del cliente. Esto brinda flexibilidad para elegir la impresora que mejor se ajuste a', 
'los requerimientos de impresión.',
'\nEn cuanto al precio, el valor del equipo es de 1500 dólares o pesos al valor del dólar blue del día de la seña. Esto ',
'puede ser una ventaja para los clientes que deseen aprovechar las condiciones del mercado al momento de adquirir el Espejo',
 'Mágico.'])
.addAnswer(['Equipo Slim Selfie Mirror'],{
media: 'https://admin.espejoselfiemirror.com.ar/images/banner4.jpg'})
.addAnswer(['*Plataforma 360 Super Slow*',
 '\nLa plataforma incluye motor, control remoto, variador de velocidad, soporte para celular o Gopro y Aro de Led',
  'El Valor en 70 o 90 cm es de $170.000',
 'El valor en 110 cm es de $200.000'])
.addAnswer(
 '✈️*Enviamos a todo el Pais.*')
 .addAnswer(['Plataforma 360 Super Slow'], {
media: 'https://admin.espejoselfiemirror.com.ar/images/banner.jpg'})
.addAnswer('Showroom',{
media: ' https://admin.espejoselfiemirror.com.ar/images/video.mp4'})
.addAnswer(['El vendedor esta disponible para asesorarlo mejor. Podria decirme su nombre asi lo comunico?'], {capture: true})
.addAnswer('Grupo creado con el agente. Gracias por comunicarse.')
.addAction(async (ctx, {provider}) => {
  const refProvider = await provider.getInstance();
  const group = await refProvider.groupCreate("Asesor - Selfie Mirror", [  `${ctx.from}@s.whatsapp.net`, '5491140054474@s.whatsapp.net'])
  refProvider.sendMessage(group.id, { text:  `Grupo creado ${group.id} con *${ctx.body}* contacto numero +${ctx.from}. Por venta` }) // say hello to everyone on the group
  console.log ("created group with id: " + group.id)
  })


  



                        

         // addKeyword(['Hola', 'ola', 'Facebook', 'Instagram','info','precio', 'valor','vale','valen','costo','precios','buenas','buen'])
const flowPrincipal =addKeyword(EVENTS.WELCOME)
    .addAnswer([' 🙌 Hola, Como estas? Te agradezco por comunicarte con *Selfie Mirror*','Si su consulta es por informacion de nuestros servicios solo escriba la palabra: *Alquiler* o *Venta* y obtendra la informacion inmediatamente.','Si usted es cliente escriba la palabra *Cliente*'],{  capture: true},
async (ctx, {fallBack}) => 
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
}},

[flowVenta, flowsAlquiler,Cliente])

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowVenta,flowsAlquiler,Cliente, audiono])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
    