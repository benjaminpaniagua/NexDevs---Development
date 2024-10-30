import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchUserCategories = ({ workId }) => {
  const [userCategories, setUserCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `http://nexdevsapi.somee.com/WorkCategories/Consultar?workId=${workId}`,
          {
            cancelToken: source.token,
          }
        );
        setUserCategories(response.data);
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
  }, []);

  return { userCategories, loading, error };
};
