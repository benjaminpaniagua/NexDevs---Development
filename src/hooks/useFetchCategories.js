import { useEffect, useState } from "react";
import axios from 'axios';

export const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://localhost:7038/WorkCategories/Listado', {
          cancelToken: source.token
        });
        setCategories(response.data);
      } catch (err) {

        if (axios.isCancel(err)) {
          console.log('Solicitud Cancelada', err.message);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    return () => {
      source.cancel('Solicitud Cancelada');
    };
  }, []);

  return { categories, loading, error };

};

/*
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
*/