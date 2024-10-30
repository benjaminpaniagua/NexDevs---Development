import { useState } from "react";
import { useFetchPosts } from "./useFetchPosts";

export const useDeletePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePost = async (postId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://nexdevsapi.somee.com/Posts/Eliminar?postId=${postId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "text/plain",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el post");
      }

      const result = await response.text();
      console.log(result); // Para verificar la respuesta del servidor
      return result; // Puedes retornar el resultado o manejarlo según lo necesites
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { deletePost, loading, error };
};
