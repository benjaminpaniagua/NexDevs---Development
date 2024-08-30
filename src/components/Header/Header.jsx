import backgroundImage from "/images/header.png";
import MainButton from "../../ui/MainButton";
import SecondaryButton from "../../ui/SecondaryButton";

const Header = () => {
  return (
    <div
      className="relative w-full h-[90vh] flex items-center text-left bg-clr-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative z-10 p-16 flex flex-col gap-12">
        <h1>
        Conecta tus habilidades <br/>y encuentra tu próximo <br/>proyecto
        </h1>
        <div className="flex gap-6">
        <MainButton text="Registrarse como Usuario" sizeX="L" sizeY="L"/>
        <SecondaryButton text="Registrarse como Empresa" sizeX="L" sizeY="L"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
