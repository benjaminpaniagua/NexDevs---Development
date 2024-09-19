import { useEffect, useState } from "react";

export const useFetchCategories = () => {
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

  const categories = [
    { title: "Aire Acondicionado", imageUrl: "/images/categories/aire-acondicionado.jpg" },
    { title: "Mecánica Automotriz", imageUrl: "/images/categories/aire-acondicionado.jpg" },
    { title: "Jardinería", imageUrl: "/images/categories/aire-acondicionado.jpg" },
    { title: "Fotografía", imageUrl: "/images/categories/aire-acondicionado.jpg" },
    { title: "Limpieza", imageUrl: "/images/categories/aire-acondicionado.jpg" },
    { title: "Cocina", imageUrl: "/images/categories/aire-acondicionado.jpg" },
    { title: "Repartidor", imageUrl: "/images/categories/aire-acondicionado.jpg" },
    { title: "Plomero", imageUrl: "/images/categories/aire-acondicionado.jpg" },
    { title: "Fumigación", imageUrl: "/images/categories/aire-acondicionado.jpg" },
];
  return categories;
};
