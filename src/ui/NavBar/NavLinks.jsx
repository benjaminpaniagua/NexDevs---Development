const NavLinks = ({ links }) => {
  return (
    <ul className="flex gap-8 text-clr-black transition-all">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="hover:text-clr-blue-hover"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
