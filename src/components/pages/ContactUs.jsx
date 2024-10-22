

const ContactUs = () => {
  return (
    <div className="flex flex-col py-10 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
      <h1 className="text-4xl font-semibold text-gray-800 mb-3 sm:text-center">
        Contáctanos
      </h1>

      <p className="text-gray-700">
        En <strong>network</strong>, valoramos todas las interacciones con
        nuestros usuarios, ya sean preguntas, sugerencias o cualquier tipo de
        consulta. Queremos asegurarnos de que tu experiencia en nuestra
        plataforma sea la mejor posible. Si tienes alguna duda o necesitas
        ayuda, no dudes en contactarnos a través de cualquiera de los canales
        que te ofrecemos a continuación.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-4">
        ¿Cómo podemos ayudarte?
      </h2>
      <p className="text-gray-700">
        Si estás buscando asistencia, soporte técnico o simplemente quieres
        compartir tus comentarios, estamos aquí para escucharte. A continuación,
        te dejamos las formas de contacto más rápidas y directas:
      </p>

      <div className="space-y-8 my-3">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Soporte Técnico</h2>
          <p>
            Si tienes problemas técnicos o necesitas ayuda con tu cuenta o los
            servicios de <strong>network</strong>, por favor, visita nuestra página de Soporte
            Técnico donde podrás encontrar respuestas a preguntas frecuentes y
            enviarnos tus consultas.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Correos Electrónicos</h2>
          <p>
            Puedes enviarnos un correo electrónico directo a las siguientes
            direcciones:
            <br />
            contacto@networkapp.com (Asistencia general)
            <br />
            soporte@networkapp.com (Soporte técnico)
            <br />
            prensa@networkapp.com (Prensa y medios)
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Llámanos</h2>
          <p>
            También puedes hablar con uno de nuestros representantes llamando a
            nuestro número de atención al cliente al +(506) 1234-5678. Nuestro
            horario de atención es de lunes a viernes, de 9:00 AM a 6:00 PM
            (CST).
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Síguenos en Redes Sociales
          </h2>
          <p>
            Estamos activos en diversas redes sociales para estar más cerca de
            ti. Síguenos para estar al tanto de nuestras últimas noticias,
            actualizaciones, y para recibir soporte inmediato:
            <br />
            Facebook:{" "}
            <a
              href="https://facebook.com/networkapp"
              className="text-blue-600 underline"
            >
              facebook.com/networkapp
            </a>
            <br />
            Twitter:{" "}
            <a
              href="https://twitter.com/networkapp"
              className="text-blue-600 underline"
            >
              twitter.com/networkapp
            </a>
            <br />
            Instagram:{" "}
            <a
              href="https://instagram.com/networkapp"
              className="text-blue-600 underline"
            >
              instagram.com/networkapp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
