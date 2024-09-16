import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-clr-green-light via-clr-white to-clr-white p-10 pt-24">
      <div className="max-w-screen-xl mx-auto gap-6 text-center flex items-start md:grid md:grid-cols-1 justify-between">
        <div className="flex gap-64 md:flex-col md:gap-6">
          
          <div className="flex flex-col space-y-4 md:items-center items-start">
            <a href="#" className="text-clr-black font-medium underline-animated hover:text-clr-blue-hover">
              Servicios
            </a>
            <a href="#" className="text-clr-black font-medium underline-animated hover:text-clr-blue-hover">
              Blog
            </a>
            <a href="#" className="text-clr-black font-medium underline-animated hover:text-clr-blue-hover">
              Contacto
            </a>
          </div>
          
          <div className="flex flex-col space-y-4 md:items-center items-start">
            <a href="#" className="text-clr-black font-medium underline-animated hover:text-clr-blue-hover">
              Política de Privacidad
            </a>
            <a href="#" className="text-clr-black font-medium underline-animated hover:text-clr-blue-hover">
              Preguntas Frecuentes
            </a>
            <a href="#" className="text-clr-black font-medium underline-animated hover:text-clr-blue-hover">
              Términos y Condiciones
            </a>
          </div>
        </div>

        <div className="flex flex-col md:items-center space-y-4 items-end">
          <div className="flex space-x-4">
            <a href="#" className="text-clr-black text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-clr-black text-xl">
              <FaWhatsapp />
            </a>
            <a href="#" className="text-clr-black text-xl">
              <FaFacebook />
            </a>
          </div>
          <div className="mt-4">
            <img src="/logo/Simple_Logo.svg" alt="Logo" className="h-8" />
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-clr-grey text-fs-small">
        2024, network by NexDevs. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
