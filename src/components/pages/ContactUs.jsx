import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-12 py-10 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contáctanos</h1>

      <p className="text-gray-700 mb-4">
        En <strong>network</strong>, valoramos todas las interacciones con
        nuestros usuarios, ya sean preguntas, sugerencias o cualquier tipo de
        consulta. Queremos asegurarnos de que tu experiencia en nuestra
        plataforma sea la mejor posible. Si tienes alguna duda o necesitas
        ayuda, no dudes en contactarnos a través de cualquiera de los canales
        que te ofrecemos a continuación.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        ¿Cómo podemos ayudarte?
      </h2>
      <p className="text-gray-700 mb-4">
        Si estás buscando asistencia, soporte técnico o simplemente quieres
        compartir tus comentarios, estamos aquí para escucharte. A continuación,
        te dejamos las formas de contacto más rápidas y directas:
      </p>

      <ul className="list-disc pl-5 mb-4">
        <li>
          <strong>Soporte técnico</strong>: Si tienes problemas técnicos o
          necesitas ayuda con tu cuenta o los servicios de Network, por favor,
          visita nuestra página de{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Soporte Técnico
          </a>{" "}
          donde podrás encontrar respuestas a preguntas frecuentes y enviarnos
          tus consultas.
        </li>
        <li>
          <strong>Correos electrónicos</strong>: Puedes enviarnos un correo
          electrónico directo a las siguientes direcciones:
          <ul className="list-disc pl-5">
            <li>
              <a
                href="mailto:contacto@networkapp.com"
                className="text-blue-600 hover:underline"
              >
                contacto@networkapp.com
              </a>{" "}
              (Asistencia general)
            </li>
            <li>
              <a
                href="mailto:soporte@networkapp.com"
                className="text-blue-600 hover:underline"
              >
                soporte@networkapp.com
              </a>{" "}
              (Soporte técnico)
            </li>
            <li>
              <a
                href="mailto:prensa@networkapp.com"
                className="text-blue-600 hover:underline"
              >
                prensa@networkapp.com
              </a>{" "}
              (Prensa y medios)
            </li>
          </ul>
        </li>
        <li>
          <strong>Llámanos</strong>: También puedes hablar con uno de nuestros
          representantes llamando a nuestro número de atención al cliente al{" "}
          <a href="tel:+50612345678" className="text-blue-600 hover:underline">
            +(506) 1234-5678
          </a>
          . Nuestro horario de atención es de{" "}
          <strong>lunes a viernes, de 9:00 AM a 6:00 PM (CST)</strong>.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Síguenos en redes sociales
      </h2>
      <p className="text-gray-700 mb-4">
        Estamos activos en diversas redes sociales para estar más cerca de ti.
        Síguenos para estar al tanto de nuestras últimas noticias,
        actualizaciones, y para recibir soporte inmediato.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <a
            href="https://facebook.com/networkapp"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
          : facebook.com/networkapp
        </li>
        <li>
          <a
            href="https://twitter.com/networkapp"
            className="text-blue-600 hover:underline"
          >
            Twitter
          </a>
          : twitter.com/networkapp
        </li>
        <li>
          <a
            href="https://instagram.com/networkapp"
            className="text-blue-600 hover:underline"
          >
            Instagram
          </a>
          : instagram.com/networkapp
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
