import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import NavLinks from './NavLinks';
import { Modal_Profile } from '../Modal_Profile/Modal_Profile';
import { Link } from 'react-router-dom';

const NavBar_copy = ({ profile_picture }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Funciones para abrir y cerrar el modal
  const handleOpenModal = () => {
    setIsAnimating(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 305);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#empresas", label: "Empresas" },
    { href: "#freelance", label: "Freelance" },
    { href: "#contacto", label: "Contacto" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between p-6 z-20 transition-all duration-300 ${isScrolled ? 'bg-clr-white' : 'bg-transparent'}`}>
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo/logo.svg" alt="Logo" className="h-12" />
        </Link>
      </div>
      <div className="w-full flex justify-end items-center gap-4 tracking-wide font-medium sm:hidden">
        <NavLinks links={links} />
        <a className='cursor-pointer transition-all hover:scale-110' onClick={handleOpenModal}>
          <img src={profile_picture} alt="Foto de perfil" className="w-14 h-14 rounded-full object-cover" />
        </a>
      </div>

      <div className='sm:flex items-center gap-10 hidden'>
        <a className="sm:flex hidden cursor-pointer transition-all hover:scale-110" onClick={handleOpenModal}>
          <img src={profile_picture} alt="Foto de perfil" className="w-14 h-14 rounded-full object-cover" />
        </a>
        <label className="flex-col gap-2 w-8 sm:flex hidden">
          <input
            className="peer hidden"
            type="checkbox"
            onClick={toggleMenu}
          />
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
          <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
        </label>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-clr-white p-4 sm:flex hidden md:justify-center md:items-center transition-transform duration-500 ease-in-out">
          <NavLinks links={links} />
        </div>
      )}

      {/* Modal de perfil */}
      {isModalOpen && (
        <div className={`absolute top-0 right-0 z-30`}>
          {/* Fondo oscuro para el modal */}
          <div className={`fixed inset-0 transition-opacity duration-300 bg-black bg-opacity-50 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} onClick={handleCloseModal} ></div>
          {/* Modal en la esquina */}
          <div className={`mt-5 mr-5 w-[22rem] transform transition-transform duration-300 ease-out scale-0 origin-center ${isAnimating ? 'animate-modal-open' : 'animate-modal-close'}`}>
            <Modal_Profile name="John Doe" state="California" city="Los Angeles" bio="Web Developer" picture={profile_picture} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar_copy;

NavBar_copy.propTypes = {
  profile_picture: PropTypes.string.isRequired
};

NavBar_copy.defaultProps = {
  profile_picture: "/images/default_profile_picture.jpg"
};