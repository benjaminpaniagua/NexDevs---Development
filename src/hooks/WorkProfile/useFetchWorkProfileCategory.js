import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchWorkProfileCategories = ({ workID }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `https://nexdevsapi.somee.com/WorkCategories/Consultar?workId=${workID}`,
          {
            cancelToken: source.token,
          }
        );
        setCategories(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Solicitud Cancelada", err.message);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    return () => {
      source.cancel("Solicitud Cancelada");
    };
  }, [workID]);

  return { categories, loading, error };
};
