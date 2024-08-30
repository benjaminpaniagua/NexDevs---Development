import InfoButton from "../../ui/InfoButton";
import SimpleButton from "../../ui/SimpleButton";

const Promotion = () => {
  return (
    <div className="bg-clr-black">
        <div className="bg-clr-black flex gap-4 items-center p-12 md:flex-col md:text-center">
            <img src="/images/promotion/smart-people.svg" alt="" />
            <div className="flex flex-col gap-10">
                <h2 className="font-clashDisplay text-clr-white">Encuentra Profesionales y Oportunidades</h2>
                <p>¿Buscas un profesional para tu próximo proyecto o quieres ofrecer tus habilidades a una comunidad activa? network te conecta con los mejores talentos y te permite crear un perfil profesional para destacar tus habilidades. Encuentra oportunidades de colaboración y haz crecer tu red profesional hoy mismo.</p>
                <div className="flex md:justify-center">
                <InfoButton text="Comenzar" sizeX="L" sizeY="L"/>
                <SimpleButton text="Explorar"/>
                </div>
            </div>
        </div>

        <div className="bg-clr-black flex gap-4 items-center p-12 md:flex-col md:text-center">
        <div className="flex flex-col gap-10">
                <h2 className="font-clashDisplay text-clr-white">Promociona tus Productos y Servicios como Empresa</h2>
                <p>¿Eres una empresa que busca ampliar su base de clientes? En network, te ayudamos a destacar y conectar con miles de potenciales clientes interesados en tus servicios. Publica tus ofertas y aprovecha nuestra plataforma para maximizar tu visibilidad y atraer nuevos negocios.</p>
                <div className="flex md:justify-center">
                <InfoButton text="Comenzar" sizeX="L" sizeY="L"/>
                <SimpleButton text="Explorar"/>
                </div>
            </div>
            <img src="/images/promotion/business.svg" alt="" />
            
        </div>


    </div>
  );
};

export default Promotion;
