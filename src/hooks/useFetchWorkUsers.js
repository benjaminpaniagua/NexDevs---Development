import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchWorkUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://nexdevsapi.somee.com/WorkProfile/Listado",
          {
            cancelToken: source.token,
          }
        );
        setUsers(response.data);
        console.log("fetche", response.data);
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

    fetchUsers();
    return () => {
      source.cancel("Solicitud Cancelada");
    };
  }, []);

  return { users, loading, error };
};
