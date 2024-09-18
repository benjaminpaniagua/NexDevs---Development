import InfoButton from "../../ui/InfoButton";
import SimpleButton from "../../ui/SimpleButton";

const Promotion = () => {
  return (
    <div className="bg-clr-black mx-auto px-20 max-w-[100rem] md:flex-col sm:px-10">
        <div className="bg-clr-black flex gap-4 items-center md:flex-col md:p-6 py-5 mx-auto max-w-[100rem]">
            <img src="/images/promotion/smart-people.svg" alt="" />
            <div className="flex flex-col gap-10">
                <h2 className="font-clashDisplay text-clr-white">Encuentra Profesionales y Oportunidades</h2>
                <h5 className="text-clr-white">¿Buscas un profesional para tu próximo proyecto o quieres ofrecer tus habilidades a una comunidad activa? network te conecta con los mejores talentos y te permite crear un perfil profesional para destacar tus habilidades. Encuentra oportunidades de colaboración y haz crecer tu red profesional hoy mismo.</h5>
                <div className="flex gap-4">
                <InfoButton text="Comenzar" onClick={() => window.location.href = '/Access_Panel/signin1'}/>
                <SimpleButton text="Explorar"/>
                </div>
            </div>
        </div>

        <div className="bg-clr-black flex gap-4 items-center md:flex-col md:p-6 py-5 mx-auto max-w-[100rem]">
        <div className="flex flex-col gap-10 ">
                <h2 className="font-clashDisplay text-clr-white">Promociona tus Productos y Servicios como Empresa</h2>
                <h5 className="text-clr-white">¿Eres una empresa que busca ampliar su base de clientes? En network, te ayudamos a destacar y conectar con miles de potenciales clientes interesados en tus servicios. Publica tus ofertas y aprovecha nuestra plataforma para maximizar tu visibilidad y atraer nuevos negocios.</h5>
                <div className="flex gap-4">
                <InfoButton text="Comenzar" onClick={() => window.location.href = '/Access_Panel/company1'}/>
                <SimpleButton text="Explorar"/>
                </div>
            </div>
            <img src="/images/promotion/business.svg" alt="" />
            
        </div>


    </div>
  );
};

export default Promotion;
