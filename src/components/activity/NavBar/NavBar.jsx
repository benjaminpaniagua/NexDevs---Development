import NavLinks from '../../ui/NavBar/NavLinks';

const navBar = () => {
  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#empresas", label: "Empresas" },
    { href: "#freelance", label: "Freelance" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <div>
      <nav className="flex items-center justify-between p-6 relative z-10 bg-clr-white">
        <div className="flex items-center">
          <a href="#">
          <img src="/public/logo/Logo.svg" alt="Logo" className="h-12 " />
          </a>
        </div>
        <div className="flex items-center gap-4 tracking-wide font-medium sm:hidden">
          <NavLinks links={links} />
        </div>
      </nav>
    </div>
  );
};

export default navBar;
