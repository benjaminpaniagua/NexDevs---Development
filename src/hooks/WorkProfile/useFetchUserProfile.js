import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useFetchUserProfile = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://nexdevsapi.somee.com/WorkProfile/BuscarID?id=${userId}`,
          {
            cancelToken: source.token,
          }
        );
        setUsers(response.data);
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
