
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FooterLink } from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-clr-green-light via-clr-white to-clr-white p-10 pt-24 font-montserrat">
      <div className="max-w-[100rem] px-20 mx-auto gap-6 text-center flex items-start md:grid md:grid-cols-1 justify-between">
      {/* <div className="flex flex-col gap-6 py-14 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10"> */}
        <div className="flex gap-64 md:flex-col md:gap-6">
          <div className="flex flex-col space-y-4 md:items-center items-start">
            <FooterLink linkText="Servicios" linkUrl="/services" />
            <FooterLink linkText="Publicaciones" linkUrl="/posts" />
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
            <a href="https://www.instagram.com/2024_network?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-clr-black text-xl" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/network-app-b83708333/" className="text-clr-black text-xl" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/ev3AkoQH8vPZND9y/?mibextid=LQQJ4d" className="text-clr-black text-xl" target="_blank" rel="noopener noreferrer">
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
