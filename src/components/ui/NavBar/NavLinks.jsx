import React from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';

const NavLinks = ({ links }) => {
  return (
    <ul className="flex sm:flex-col gap-8 md:p-2"> {/* Puse sm en vez de md porque el md afecta de forma rara a la vista de tablet */}
      {links.map((link) => (
        <Link to={link.route}>
          <li key={link.href}>
            <a
              className="underline-animated hover:text-clr-blue-hover text-sm font-medium"
            >
              {link.label}
            </a>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
