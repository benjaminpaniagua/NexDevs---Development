import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchUserSkills = ({ workId }) => {
  const [userSkills, setUserSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchSkills = async () => {
      try {
        const response = await axios.get(
          `https://nexdevsapi.somee.com/WorkSkills/Consultar?workId=${workId}`,
          {
            cancelToken: source.token,
          }
        );
        setUserSkills(response.data);
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

    fetchSkills();
    return () => {
      source.cancel("Solicitud Cancelada");
    };
  }, []);

  return { userSkills, loading, error };
};
