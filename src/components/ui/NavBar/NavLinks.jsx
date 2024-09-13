import React from 'react';
import '../../../index.css'; // Asegúrate de importar tu archivo CSS

const NavLinks = ({ links }) => {
  return (
    <ul className="flex sm:flex-col gap-8 text-clr-black md:p-2 md:items-center">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="underline-animated hover:text-clr-blue-hover text-sm font-medium"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
