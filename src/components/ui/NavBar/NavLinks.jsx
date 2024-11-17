
import '../../../index.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const NavLinks = ({ links, onClick }) => {
  return (
    <ul className="flex sm:flex-col gap-8 md:p-2"> {/* Puse sm en vez de md porque el md afecta de forma rara a la vista de tablet */}
      {links.map((link) => (
        <Link to={link.route} key={link.label} onClick={onClick}>
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
NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired, 
};

export default NavLinks;