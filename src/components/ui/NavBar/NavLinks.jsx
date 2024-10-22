
import '../../../index.css';
import { Link } from 'react-router-dom';

const NavLinks = ({ links }) => {
  return (
    <ul className="flex sm:flex-col gap-8 md:p-2"> {/* Puse sm en vez de md porque el md afecta de forma rara a la vista de tablet */}
      {links.map((link) => (
        <Link to={link.route} key={link.label}>
            <p
              className="font-montserrat text-clr-black underline-animated hover:text-clr-blue-hover text-sm font-bold"
            >
              {link.label}
            </p>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
