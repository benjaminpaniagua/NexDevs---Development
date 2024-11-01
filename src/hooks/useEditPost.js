import { useState } from "react";

export const useEditPost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editPost = async (postId, postData) => {
    setLoading(true);
    setError(null);

    console.log("Intentando editar el post con ID:", postId);
    console.log("Datos del post que se enviarán:", postData);

    try {
      const response = await fetch(`http://nexdevsapi.somee.com/Posts/Editar`, {
        method: "PUT",
        body: postData, // Cambiado a FormData
      });

      const responseText = await response.text();
      console.log("Texto de la respuesta:", responseText);

      if (!response.ok) {
        throw new Error(`Error al editar el post: ${responseText}`);
      }

      console.log("Mensaje de éxito después de editar:", responseText);
      return true;
    } catch (err) {
      setError(err.message);
      console.error("Error capturado:", err.message);
      return false;
    } finally {
      setLoading(false);
      console.log("Estado de carga después de la operación:", loading);
    }
  };

  return { editPost, loading, error };
};
