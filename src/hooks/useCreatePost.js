import { useState } from "react";
import axios from "axios";

export const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const createPost = async (post) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://nexdevsapi.somee.com/Posts/Agregar",
        post
      );
      //console.log(response.data);
      setMessage(response.data.message);
      console.log(response.data);
      return response.data;
    } catch (error) {
      setError("Error al crear la cuenta");
      setMessage("Error al crear la publicación");
    } finally {
      setLoading(false);
    }
  };

  return { createPost, loading, error, message };
};
