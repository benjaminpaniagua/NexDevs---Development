import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import NavLinks from './NavLinks';
import { Modal_Profile } from '../Modal_Profile/Modal_Profile';
import { Link, Route } from 'react-router-dom';
import { SecondaryButton } from '../Buttons';

const NavBar = ({ profile_picture }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
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
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {      
      setIsMenuAnimating(true);
      setIsOpen(true);
    } else {
      setIsMenuAnimating(false);
      setTimeout(() => setIsOpen(false), 305);
    }
  };

  const handleMenuClose = () => {
    const checkbox = document.getElementById('menu-toggle');
    if (checkbox.checked) {     
      checkbox.checked = false;
      setIsMenuAnimating(false);
      setTimeout(() => setIsOpen(false), 305);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      if (newScrollPosition > scrollPosition) {
        setIsScrolled(true);
        handleCloseModal();
        handleMenuClose();
      } else if (newScrollPosition < scrollPosition) {
        setIsScrolled(false);
        handleCloseModal();
        handleMenuClose();
      }
      setScrollPosition(newScrollPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const links = [
    { label: "Inicio", route: "/Community_Feed/" },
    { label: "Empresas", route: "/profiles/" },
    { label: "Freelance" },
    { label: "Contacto" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between p-5 z-20 transition-all duration-300 shadow-lg bg-clr-white ${isScrolled ? '-translate-y-36' : 'translate-y-0'}`}>
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo/Logo.svg" alt="Logo" className="h-12 sm:h-9" />
          </Link>
        </div>
        <div className="w-full flex justify-end items-center gap-4 tracking-wide font-medium sm:hidden">
          <NavLinks links={links} />
          <a className='cursor-pointer transition-all hover:scale-110' onClick={handleOpenModal}>
            {/* <img src={profile_picture} alt="Foto de perfil" className="w-14 h-14 rounded-full object-cover" /> */}
          </a>
          <Link to="/Access_Panel/login">
            <SecondaryButton text="Únete" extraStyles={"px-14 py-2"} />
          </Link>
        </div>

        <div className='sm:flex items-center gap-10 hidden'>
          <a className="sm:flex hidden cursor-pointer transition-all hover:scale-110" onClick={handleOpenModal}>
            {/* <img src={profile_picture} alt="Foto de perfil" className="w-10 h-10 rounded-full object-cover" /> */}          
          </a>
          <Link to="/Access_Panel/login">
            <SecondaryButton text="Únete" extraStyles={"px-5 py-2"} />
          </Link>
          <label className="flex-col gap-2 w-8 sm:flex hidden">
            <input
              id="menu-toggle"
              className="peer hidden"
              type="checkbox"
              onClick={toggleMenu}
            />
            <div className="rounded-2xl h-[3px] w-1/2 bg-clr-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
            <div className="rounded-2xl h-[3px] w-full bg-clr-black duration-500 peer-checked:-rotate-45"></div>
            <div className="rounded-2xl h-[3px] w-1/2 bg-clr-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
          </label>
        </div>

        {isOpen && (
          <div className={`absolute top-full left-0 z-10 right-0 bg-clr-white p-4 sm:flex hidden md:justify-start md:items-start transition-all shadow-lg duration-300 ${isMenuAnimating ? 'animate-menu-open' : 'animate-menu-close'}`}>
            <NavLinks links={links} />
          </div>
        )}
        {/* Modal de perfil */}
        {isModalOpen && (
          <div className={`absolute top-0 right-0 z-30 sm:m-auto`}>
            {/* Fondo oscuro para el modal */}
            <div className={`fixed inset-0 h-screen transition-opacity duration-300 bg-black bg-opacity-50 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} onClick={handleCloseModal} ></div>
            {/* Modal de la esquina */}
            <div className={`mt-5 mr-5 w-[22rem] sm:mx-3 transform transition-transform duration-300 ease-out scale-0 origin-center ${isAnimating ? 'animate-modal-open' : 'animate-modal-close'}`}>
              <Modal_Profile name="John Doe" state="California" city="Los Angeles" bio="Web Developer" picture={profile_picture} onClose={handleCloseModal} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;

NavBar.propTypes = {
  profile_picture: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  profile_picture: "/images/default_profile_picture.jpg"
};