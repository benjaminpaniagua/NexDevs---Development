

const AboutUs = () => {
  return (
    <div className="w-full h-4/6 bg-clr-black flex gap-4 md:gap-2 items-center p-12 md:flex-col md:p-4">
      <div className="flex mx-auto px-20 max-w-[100rem] md:flex-col md:px-4">
        <div className="flex flex-col gap-2 mt-24 md:mt-8">
          <h2 className="text-clr-white text-4xl sm:text-fs-xlarge font-bold">¿Quienes somos?</h2>
          <h5 className="text-clr-white sm:text-fs-small">
            {`En "network," creemos en el poder de conectar personas a través de sus habilidades y pasiones. Nuestra plataforma está diseñada para fomentar interacciones genuinas y colaborativas entre profesionales, sin la formalidad rígida de otras redes. Aquí puedes ser tú mismo, mostrar lo que haces mejor y encontrar oportunidades que realmente resuenen contigo.`}
          </h5>
        </div>
        <img className="md:mx-auto md:w-[70%]" src="/images/aboutUs.svg" alt="imagen de quienes somos"/>
      </div>
    </div>
  );
};

export default AboutUs;