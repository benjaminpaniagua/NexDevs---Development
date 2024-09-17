import backgroundImage from "/images/header.png";
import MainButton from "../../ui/MainButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="relative w-full h-[90vh] flex items-center text-left bg-clr-white p-12 md:p-4"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative z-10 flex flex-col gap-12">
        <h1 className="w-2/3 md:w-full  md:text-4xl font-clash-variable">
          Conecta tus habilidades y encuentra tu próximo proyecto
        </h1>
        <div className="flex gap-6">
          <Link to="/Access_Panel/login">
            <MainButton text="Comenzar" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
