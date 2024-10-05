import { SecondaryButton } from "../../ui/Buttons";
import { Link } from "react-router-dom";
const Promotion = () => {
  return (
    <div className="bg-clr-black">
      <div className="bg-clr-black flex gap-4 items-center mx-auto py-5 px-20 max-w-[100rem] md:flex-col sm:px-10">
        <img src="/images/promotion/smart-people.svg" alt="" />
        <div className="flex flex-col">
          <h2 className="font-bold text-fs-xlarge text-clr-white">Encuentra Profesionales y Oportunidades</h2>
          <h5 className="text-clr-white sm:text-fs-med">¿Buscas un profesional para tu próximo proyecto o quieres ofrecer tus habilidades a una comunidad activa? network te conecta con los mejores talentos y te permite crear un perfil profesional para destacar tus habilidades. Encuentra oportunidades de colaboración y haz crecer tu red profesional hoy mismo.</h5>
          <div className="flex gap-4 mt-6">
            <Link to="/profiles">
              <SecondaryButton text="Explorar" extraStyles={"px-14 py-4"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-clr-black flex gap-4 items-center mx-auto px-20 max-w-[100rem] md:flex-col sm:px-10 md:mt-14">
        <div className="flex flex-col">
          <h2 className="font-bold text-fs-xlarge text-clr-white">Promociona tus Productos y Servicios como Empresa</h2>
          <h5 className="text-clr-white sm:text-fs-med">¿Eres una empresa que busca ampliar su base de clientes? En network, te ayudamos a destacar y conectar con miles de potenciales clientes interesados en tus servicios. Publica tus ofertas y aprovecha nuestra plataforma para maximizar tu visibilidad y atraer nuevos negocios.</h5>
          <div className="flex gap-4 mt-6">
            <Link to="/Access_Panel/login">
              <SecondaryButton text="Comenzar" extraStyles={"px-14 py-4"} />
            </Link>
          </div>
        </div>
        <img src="/images/promotion/business.svg" alt="" />

      </div>
    </div>
  );
};

export default Promotion;
