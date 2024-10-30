import { useState } from "react";
import axios from "axios";

export const useAddCategories = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const addCategories = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://nexdevsapi.somee.com/WorkCategories/Agregar",
        category
      );
      //console.log(response.data);
      setMessage(response.data.message);
      return response.data;
    } catch (error) {
      setError("Error al agregar las categorías");
      setMessage("Error al agregar las categorías");
    } finally {
      setLoading(false);
    }
  };

  return { addCategories, loading, error, message };
};
