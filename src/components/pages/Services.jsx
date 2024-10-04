import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col gap-12 py-10 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
      <h1 className="text-3xl font-bold text-clr-black mb-6">
        Nuestros Servicios
      </h1>
      <p className="text-lg mb-4">
        En <span className="font-semibold">network</span>, ofrecemos una
        variedad de servicios que están diseñados para ayudar a pequeños
        empresarios, PYMES y freelancers a promocionar y destacar sus productos
        o habilidades. A continuación, te mostramos los servicios principales
        que ofrecemos en nuestra plataforma:
      </p>

      <div className="space-y-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Creación de Perfiles Profesionales
          </h2>
          <p>
            Registra un perfil profesional detallado que permita a los clientes
            conocer tus habilidades, experiencia y servicios de manera clara y
            atractiva. Puedes agregar descripciones, imágenes y más.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Promoción de Servicios</h2>
          <p>
            Publica tus servicios con fotos, precios, y descripciones
            detalladas. Aprovecha nuestra plataforma para conectar con más
            clientes potenciales interesados en tus servicios.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Publicaciones Destacadas
          </h2>
          <p>
            Resalta tus servicios a través de publicaciones patrocinadas,
            ganando visibilidad en la plataforma. Aumenta tus oportunidades de
            negocio siendo destacado en el feed.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Revisión y Aprobación de Contenidos
          </h2>
          <p>
            Todas las publicaciones pasan por un proceso de revisión interno
            para asegurar su calidad y veracidad. Esto garantiza que los
            servicios publicados cumplen con nuestras políticas.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Soporte al Usuario</h2>
          <p>
            Ofrecemos soporte técnico y de atención al cliente para que puedas
            resolver cualquier duda o inconveniente mientras utilizas nuestra
            plataforma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
