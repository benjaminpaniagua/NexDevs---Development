import { useState, useEffect } from 'react';

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
        const response = await fetch(`https://nexdevsapi.somee.com/WorkCategories/ConsultarCategory?categoryId=${categoryId}`);
        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return { data, loading, error };
};
