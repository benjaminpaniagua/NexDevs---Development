import backgroundImage from "/images/header.png";
import { MainButton } from "../../ui/Buttons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="relative w-full h-[90vh] flex items-center text-left bg-clr-white p-12 md:p-4 "
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative z-10 flex flex-col gap-12 mx-auto px-20 max-w-[100rem] md:flex-col lg:px-6">
        <h1 className="font-clash w-full text-7xl lg:text-5xl">
          Conecta tus habilidades y encuentra tu próximo proyecto
        </h1>
        <div className="flex gap-6">
          <Link to="/Access_Panel/login">
            <MainButton text="Comenzar" extraStyles={"px-14 py-4"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
