import NavLinks from '../../ui/NavBar/NavLinks';
import NavButtons from '../../ui/NavBar/NavButtons';

const navBar = () => {
  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Acerca de" },
    { href: "#community", label: "Comunidad" },
  ];

  return (
    <div>
      <nav className="flex items-center justify-between p-6 relative z-10 bg-clr-white">
        <div className="flex items-center">
          <img src="/logo/logo.png" alt="Logo" className="h-8 mr-4" />
        </div>
        <div className="flex items-center gap-4 tracking-wide font-medium sm:hidden">
          <NavLinks links={links} />
          <NavButtons logIn="Iniciar Sesión" registered="Registrarse" />
        </div>
      </nav>
    </div>
  );
};

export default navBar;
