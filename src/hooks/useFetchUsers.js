import { useEffect, useState } from "react";

export const useFetchUsers = () => {
  /*const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(``);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
  };*/
  const users = [
    {
      image: "/images/Profile_Placeholder.png",
      name: "Carlos Méndez",
      category: "Electricidad",
      biography: "Mi nombre es Carlos Méndez y me dedico a la instalación y mantenimiento de sistemas eléctricos. Vivo en Heredia y me apasiona trabajar en proyectos grandes y pequeños, asegurando la seguridad y funcionalidad de todos los sistemas.",
      province: "Heredia",
      city: "Heredia",
      number: "+506 7203 5678",
      email: "c.mendez@mail.com"
    },
    {
      image: "/images/Profile_Placeholder.png",
      name: "María Fernández",
      category: "Fontanería",
      biography: "Soy María Fernández, una fontanera con más de 10 años de experiencia. Me especializo en solucionar problemas de fontanería en hogares y comercios. Vivo en Cartago y siempre busco ofrecer un servicio de calidad.",
      province: "Cartago",
      city: "Cartago",
      number: "+506 7001 2345",
      email: "m.fernandez@mail.com"
    },
    {
      image: "/images/Profile_Placeholder.png",
      name: "Alejandro Robles",
      category: "Jardineria",
      biography: "Hola, soy Alejandro Robles, un apasionado jardinero de San Ramón. Como estudiante, equilibro mis estudios con mi amor por la naturaleza manteniendo espacios verdes en mi tiempo libre.",
      province: "San Ramón",
      city: "Alajuela",
      number: "+506 6890 0312",
      email: "ale.robles@mail.com"
    }

  ];
  return users;
};
