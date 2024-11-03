import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchPosts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://nexdevsapi.somee.com/Posts/ListadoGeneral"
      );

      setData(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(
        error.response?.data?.message || "Error al obtener las publicaciones."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    error,
    loading,
  };
};
