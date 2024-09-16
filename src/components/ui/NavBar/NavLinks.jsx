import React from 'react';
import '../../../index.css'; // Asegúrate de importar tu archivo CSS

const NavLinks = ({ links }) => {
  return (
    <ul className="flex sm:flex-col gap-8 md:p-2"> {/* Puse sm en vez de md porque el md afecta de forma rara a la vista de tablet */}
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
