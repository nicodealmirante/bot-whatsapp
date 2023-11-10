const {addKeyword,EVENTS,provider} = require('@bot-whatsapp/bot')
let data1;
let mywhatsa = "+5491140054474@s.whatsapp.net"
module.exports = addKeyword(['INFO. ALQUILER'], {sensitive: true})
          
                             //777777777777777777777777777777777777 ALQUILER



.addAnswer('👌Te envio la info de alquiler.')
          
          .addAnswer('Selfie Mirror',{
               media: 'banner22.jpg'})
      
       
      //ESPEJO
               .addAnswer(['*El Espejo Mágico Selfie Mirror: Transforma tus Eventos en Experiencias Inolvidables*',
               'En Selfie Mirror, hemos fusionado tecnología y entretenimiento para brindarte una experiencia única en tus eventos. Con nuestro servicio de alquiler del Espejo Mágico Selfie Mirror, tu celebración se transforma en una ocasión inolvidable.',
               'Nuestro Espejo Mágico no es solo un dispositivo, es una obra de arte por derecho propio. Su diseño elegante y moderno añade una dosis de sofisticación a cualquier evento, desde bodas y cumpleaños hasta fiestas corporativas.',
               'Ofrecemos un software personalizado que te permite personalizar cada aspecto de las fotos. Desde plantillas de diseño exclusivas hasta efectos especiales y opciones de impresión a medida, puedes dar rienda suelta a tu creatividad.',
               'Nuestra colección de accesorios y elementos de decoración es diversa y emocionante. Desde sombreros y anteojos extravagantes hasta pizarras con mensajes ingeniosos, tus invitados pueden transformarse y crear recuerdos únicos.',
               'Sin restricciones en la cantidad de fotos que pueden tomarse durante el tiempo de alquiler, cada sonrisa, pose y momento especial se pueden capturar y recordar.',
               'El Espejo Mágico ofrece la emoción de las impresiones instantáneas. Tus invitados pueden llevarse recuerdos físicos que atesorarán durante años.',
               'Nuestro equipo se encarga del montaje y desmontaje del Espejo Mágico, lo que te permite relajarte y disfrutar del evento. Además, un técnico capacitado está presente durante todo el evento para garantizar que todo funcione sin problemas y para ayudar a los invitados.',
               'Todas las fotos se almacenan digitalmente y se proporciona acceso a una galería en línea. Tus invitados pueden descargar sus fotos en cualquier momento.',
               'El tiempo de alquiler se adapta a tus necesidades. El alquiler mínimo es de 2 horas, pero puedes extenderlo según tus preferencias.',
               'En Selfie Mirror, nuestra pasión es hacer que tu evento sea inolvidable. Ya sea una boda emocionante, un cumpleaños especial o una reunión corporativa, el Espejo Mágico Selfie Mirror agrega un toque mágico a cada ocasión. Contáctanos hoy para obtener más información, disponibilidad y precios. ¡Haz que tus momentos especiales brillen con el Espejo Mágico Selfie Mirror!'])

             
        .addAnswer('Espejo Mágico Selfie Mirror', {
            media: 'banner3.jpg'})
     /// 360  
            .addAnswer(['*Alquiler de Plataforma 360: Eleva la Experiencia de tus Eventos Sociales*',
            'En Selfie Mirror, te ofrecemos la oportunidad de llevar la diversión y la emoción de la fotografía y video a un nivel completamente nuevo con nuestra Plataforma 360. Ya no se trata solo de capturar momentos, se trata de crear experiencias memorables.',
            'Nuestra Plataforma 360 te brinda la oportunidad de sorprender a tus invitados con un servicio de alquiler único y emocionante. ¿Qué puedes esperar?',
            '1. **360 Grados de Diversión**:',
            'Imagina poder capturar todos los ángulos de diversión en tu evento. Nuestra plataforma 360 grados registra cada sonrisa, cada risa y cada gesto especial desde todos los ángulos. Tus invitados se convierten en estrellas en un set de grabación en 360 grados.',
            '2. **Edición Instantánea**:',
            'Lo que hace que nuestra plataforma 360 sea aún más especial es la edición en tiempo real. Los videos son filmados y compartidos en el momento, ya editados automáticamente. Esto significa que tus invitados pueden disfrutar de la emoción de ver sus momentos especiales de inmediato.',
            '3. **Accesorios Divertidos**:',
            'No hay diversión sin accesorios, ¿verdad? Ofrecemos una amplia variedad de accesorios, desde pelucas y anteojos extravagantes hasta pistolas lanzaburbujas y cotillón. Tus invitados pueden elegir sus accesorios y transformarse en personajes únicos.',
            '4. **Flexibilidad en el Tiempo**:',
            'El tiempo de alquiler de la Plataforma 360 es flexible y se adapta a las necesidades de tu evento. Puedes contratarla por un mínimo de 2 horas, asegurándote de que tus invitados tengan suficiente tiempo para divertirse y crear recuerdos inolvidables.',
            'En Selfie Mirror, nos apasiona llevar la diversión y la innovación a tus eventos sociales. Ya sea una fiesta de cumpleaños, una boda o cualquier ocasión especial, la Plataforma 360 agrega una dimensión emocionante que tus invitados recordarán. Contáctanos hoy para obtener más información, disponibilidad y precios. ¡Haz que tus eventos sociales sean inolvidables con la Plataforma 360 de Selfie Mirror!'])
           
            .addAnswer('Plataforma 360 Super Slow', {media: 'banner.jpg'})
                    .addAnswer('Selfie Mirror 360 + Selfie',{media: 'dibu.jpg'})
    .addAnswer('Showroom', {media: 'video.mp4'})
    .addAnswer('Selfie Mirror', {media: 'video2.mp4'})
    .addAnswer('Captura 360', {media: 'video360.mp4'})

   
            // VALORES
          .addAnswer(['*VALORES*',
                 '\n360 Super Slow.*',
                 '\nEl servicio dura 2 horas. Durante ese tiempo no existe límite de capturas.',
                'Los videos son filmados y compartidos en el momento ya editados escaneando un codigo QR',
                'Incluye accesorios (pistola lanza burbujas, lanza billetes.)',
               'El valor del servicio de 2 horas es de $ 100.000 .-',])
               .addAnswer(['\n*Espejo Magico*',
               '\nValor Servicio por 2 Horas $ 100.000',
               '\nValor ambos servicios por 2 Horas $ 180.000',
               '\nEl minimo de alquiler son 2 horas',
               '\nEl valor de la Hora adicional es de $ 50.000'])
                           .addAnswer(['🚚El valor no incluye traslados'])
   .addAnswer("En que localidad es el evento?", {
       capture: false,idle: 200000},async(ctx, {inRef}) => {     // idle: 2000 = 2 segundos

       data1=ctx.body
     }
     )
       .addAnswer("Fecha?", {
         capture: false,idle: 200000},async(ctx, {provider, inRef}) => {     // idle: 2000 = 2 segundos
                     
              data2=ctx.body
              await provider.sendtext(mywhatsa, `*ALQUILER* \nNumero: +${ctx.from}\n Nombre: *${ctx.pushName}n\LUGAR: ${data1}n\FECHA: \n*${ctx.body}*`)
         if (ctx?.idleFallBack) {  
              
              
         }          
       }
       )
         .addAnswer("UN AGENTE SE COMUNICARA CON USTED A LA BREVEDAD, O PUEDE COMUNICARSE DIRECTAMENTE AL *+5491140054474 - NICOLAS*", async (ctx, {gotoFlow}) => {     // idle: 2000 = 2 segundos

         return gotoFlow(menuB)})

const flujoFinal = addKeyword("VENTS.ACTION").addAnswer('Sigue ahi? Quiere que me comunique  despues? Le dejo mi telefono *+5491140054474 - NICOLAS*')


   


/// DEPOSITO!!!
    
 /* .addAnswer(['*Espejo Mágico Selfie Mirror*',
   '\nDiseño elegante: Nuestro espejo mágico tiene un diseño moderno y elegante que se adapta a cualquier tipo de evento.',
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
 'Valor Servicio por 2 Horas $ 100.000 (base)',
 //'El valor de la Hora adicional es de $ 50.000'])
        */

