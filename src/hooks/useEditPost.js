import { useState } from "react";
import axios from "axios";

export const useEditPost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editPost = async (postId, postData) => {
    setLoading(true);
    setError(null);

    console.log("Intentando editar el post con ID:", postId);
    console.log("Datos del post que se enviarán:", postData);

    try {
      const response = await axios.put(
        `https://nexdevsapi.somee.com/Posts/Editar`,
        postData, // Aquí se envía el FormData directamente
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Texto de la respuesta:", response.data);

      console.log("Mensaje de éxito después de editar:", response.data);
      return true;
    } catch (err) {
      setError(err.response?.data || err.message);
      console.error("Error capturado:", err.response?.data || err.message);
      return false;
    } finally {
      setLoading(false);
      console.log("Estado de carga después de la operación:", loading);
    }
  };

  return { editPost, loading, error };
};
