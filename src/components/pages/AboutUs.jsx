export function AboutUs() {
  return (
    <div className="flex flex-col gap-8 py-10 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
      <h1 className="text-4xl sm:text-center font-bold text-clr-black">
        Acerca de Nosotros
      </h1>
      <p className="">
        En Network, creemos en el poder de las conexiones para impulsar el éxito
        de los pequeños empresarios y trabajadores independientes. Nuestra
        misión es crear una plataforma accesible y amigable donde profesionales
        de diversas especialidades puedan promover sus servicios y conectar con
        personas en busca de talento, sin las barreras y formalidades que otras
        redes imponen.
      </p>

      <section className="">
        <h3 className="text-2xl font-bold mb-2">Misión</h3>
        <p>
          Facilitar a pequeños empresarios, PYMES y trabajadores independientes
          una plataforma dedicada exclusivamente a la promoción de sus servicios
          y productos, ayudándoles a aumentar su visibilidad y conectarse de
          manera efectiva con su audiencia. <br />A través de nuestra
          aplicación, buscamos simplificar la forma en que estos negocios
          ofrecen sus servicios, mejorando su alcance y brindando una
          experiencia centrada en sus necesidades.
        </p>
        <br />
        <h3 className="text-2xl font-bold mb-2">Visión</h3>
        <p>
          Convertirnos en la plataforma líder que empodere a pequeños
          empresarios y trabajadores independientes, ofreciendo un espacio
          exclusivo para su crecimiento y éxito en el mercado digital. <br />
          Nuestra visión es crear una comunidad robusta donde el talento y los
          servicios de calidad sean fácilmente accesibles, fomentando una
          economía local más fuerte y conectada.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-2">Valores</h3>
        <ul className="space-y-3 font-semibold">
          <li>Accesibilidad</li>
          <li>Transparencia</li>
          <li>Colaboración</li>
          <li>Innovación</li>
          <li>Comunidad</li>
        </ul>
      </section>
    </div>
  );
}
