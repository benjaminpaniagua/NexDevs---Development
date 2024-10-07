import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FooterLink } from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-clr-green-light via-clr-white to-clr-white p-10 pt-24 font-montserrat">
      <div className="max-w-screen-xl mx-auto gap-6 text-center flex items-start md:grid md:grid-cols-1 justify-between">
        <div className="flex gap-64 md:flex-col md:gap-6">
          <div className="flex flex-col space-y-4 md:items-center items-start">
            <FooterLink linkText="Servicios" linkUrl="/services" />
            <FooterLink linkText="Comunidad" linkUrl="/posts" />
            <FooterLink linkText="Contáctanos" linkUrl="/contact-us" />
          </div>

          <div className="flex flex-col space-y-4 md:items-center items-start">
            <FooterLink linkText="Acerca de Nosotros" linkUrl="/about-us" />
            <FooterLink linkText="Preguntas Frecuentes" linkUrl="/faq" />
            <FooterLink linkText="Términos y Condiciones" linkUrl="/terms-and-conditions" />
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
