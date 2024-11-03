import { useState } from "react";
import axios from "axios";

export const useDeleteComment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteComment = async (commentId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.delete(
        `https://nexdevsapi.somee.com/Comments/Eliminar`,
        {
          params: { commentId },
          headers: {
            Accept: "text/plain",
          },
        }
      );

      // Si la eliminación es exitosa, devuelve true
      return response.status === 200;
    } catch (err) {
      setError(err.response?.data?.message || "Error al eliminar el comentario");
      return false; // En caso de error, devuelve false
    } finally {
      setLoading(false);
    }
  };

  return { deleteComment, loading, error };
};
