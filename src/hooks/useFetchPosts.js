import { useEffect, useState } from "react";

export const useFetchPosts = () => {
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

  const posts = [
    {
      title: "Transformación total de jardín en una casa de Puntarenas",
      imageUrl: "/images/Post_Image_Placeholder.png",
      description: 'Esta semana tuve el placer de trabajar en la transformación del jardín de una hermosa casa en Puntarenas. Los propietarios querían un espacio verde que fuera funcional...',
      user: 'Alejandro Robles',
      profilepicture: '/images/default_profile_picture.jpg'
    },
    {
      title: "Creación de un Espacio Verde para una Empresa Local",
      imageUrl: "/images/Post_Image_Placeholder.png",
      description: 'Esta semana trabajamos en el jardín de una oficina aquí en Puntarenas. La empresa quería un espacio acogedor para que sus empleados pudieran relajarse durante las pausas. 🌿...',
      user: 'Maria Rosalvo',
      profilepicture: '/images/default_profile_picture.jpg'
    },
    {
      title: "Renovación de Jardín Familiar en el Barrio",
      imageUrl: "/images/Post_Image_Placeholder.png",
      description: 'Hace unos días, tuve la oportunidad de trabajar en un jardín familiar aquí en el barrio. Los dueños querían un lugar donde sus hijos pudieran jugar y, al mismo tiempo, disfrutar de un entorno...',
      user: 'Pedro Perez',
      profilepicture: '/images/default_profile_picture.jpg'
    },
    {
      title: "Diseño Moderno de Terraza para Apartamento",
      imageUrl: "/images/Post_Image_Placeholder.png",
      description: "Recientemente, trabajé en una terraza de un apartamento con vistas increíbles. Los propietarios querían un espacio moderno donde pudieran relajarse y organizar reuniones con amigos...",
      user: "Ana Martínez",
      profilepicture: "/images/default_profile_picture.jpg"
    },
    {
      title: "Rehabilitación de Parque Comunitario",
      imageUrl: "/images/Post_Image_Placeholder.png",
      description: "Un proyecto especial en el que participé fue la rehabilitación de un pequeño parque en la comunidad. Fue emocionante ver cómo un lugar abandonado se convirtió en un espacio vibrante para las familias...",
      user: "Carlos Rodríguez",
      profilepicture: "/images/default_profile_picture.jpg"
    },
    {
      title: "Transformación de Jardín Zen en Casa de Campo",
      imageUrl: "/images/Post_Image_Placeholder.png",
      description: "Este proyecto me permitió trabajar con un cliente que quería un jardín zen en su casa de campo. Fue un desafío integrar elementos naturales y crear un espacio sereno y equilibrado...",
      user: "Laura Gómez",
      profilepicture: "/images/default_profile_picture.jpg"
    }    
  ];
  return posts;
};
