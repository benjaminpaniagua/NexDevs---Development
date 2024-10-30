import { useState } from "react";

export const useDeleteComment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteComment = async (commentId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://nexdevsapi.somee.com/Comments/Eliminar?commentId=${commentId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "text/plain",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el comentario");
      }

      // No se espera contenido en la respuesta, solo un código 200
      return true; // Retorna true para indicar éxito
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteComment, loading, error };
};
