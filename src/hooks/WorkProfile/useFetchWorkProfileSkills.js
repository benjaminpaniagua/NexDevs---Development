import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchWorkProfileSkills = ({ workID }) => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchSkills = async () => {
      try {
        const response = await axios.get(
          `http://nexdevsapi.somee.com/WorkSkills/Consultar?workId=${workID}`,
          {
            cancelToken: source.token,
          }
        );
        setSkills(response.data);
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
  }, [workID]);

  return { skills, loading, error };
};
