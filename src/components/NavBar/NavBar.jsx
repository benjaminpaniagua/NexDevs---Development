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
          {/* Cambie la imagen del logo por un vector svg para que sea mas flexible de usar y poder cambiar sus dimensiones y color directamente en codigo sin perder calidad. Att. Luis*/}
          <svg className="h-8 mr-4 flex-no-shrink fill-black" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 121">
            <path d="m204.32,0c-21.34,0-40.75,10.92-51.92,29.23-9.06,14.84-24.69,24.48-42.04,25.92-1.53.12-3.04.19-4.56.19-15.75,0-30.82-6.8-41.22-18.78-7.03-8.09-17.17-12.73-27.8-12.73-20.29.01-36.79,16.46-36.79,36.68s16.5,36.65,36.77,36.65c10.65,0,20.77-4.64,27.8-12.73,10.41-11.98,25.48-18.78,41.22-18.78,1.52,0,3.03.06,4.56.19,17.37,1.45,32.98,11.09,42.04,25.92,11.17,18.32,30.59,29.24,51.93,29.24,33.46,0,60.68-27.14,60.68-60.49S237.78.01,204.32.01h0Z"/>
          </svg>
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
