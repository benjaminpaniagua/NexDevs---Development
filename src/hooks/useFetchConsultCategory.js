import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchConsultCategory = (categoryId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryId) {
      setData(null);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://nexdevsapi.somee.com/WorkCategories/ConsultarCategory`, {
          params: { categoryId },
        });

        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error en la petición");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return { data, loading, error };
};
