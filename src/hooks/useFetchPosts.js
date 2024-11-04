import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const useFetchPosts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const liked = queryParams.get('liked')

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
  }, [liked]);

  return {
    data,
    error,
    loading,
  };
};
