import React, { useState } from 'react';
import NavLinks from './NavLinks';

const NavBar = () => {
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
    <div>
      <nav className="flex items-center justify-between p-6 relative z-50 bg-clr-white">
        <div className="flex items-center">
          <a href="#">
            <img src="/logo/logo.svg" alt="Logo" className="h-12" />
          </a>
        </div>
        <div className="flex items-center gap-4 tracking-wide font-medium sm:hidden">
          <NavLinks links={links} />
        </div>
        
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

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-clr-white p-4 sm:flex hidden md:justify-center md:items-center transition-transform duration-500 ease-in-out">
            <NavLinks links={links} />
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;