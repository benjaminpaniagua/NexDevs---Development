import { useState } from "react";
import axios from "axios";

export const useDeletePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePost = async (postId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.delete(
        `https://nexdevsapi.somee.com/Posts/Eliminar`,
        {
          params: { postId },
          headers: {
            Accept: "text/plain",
          },
        }
      );

      console.log(response.data); // Para verificar la respuesta del servidor
      return response.data; // Devuelve la respuesta del servidor
    } catch (err) {
      setError(err.response?.data?.message || "Error al eliminar el post");
    } finally {
      setLoading(false);
    }
  };

  return { deletePost, loading, error };
};
