import { useState } from "react";
import axios from "axios";

export const useDeleteCollection = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const deleteCollection = async (collectionId) => {
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const response = await axios.delete(
        `http://nexdevsapi.somee.com/Collections/Eliminar?id=${collectionId}`
      );

      if (response.status === 200) {
        setSuccessMessage(response.data);
      } else {
        setError("Error al eliminar la colección");
      }
    } catch (err) {
      setError(err.response?.data || "Error al realizar la eliminación");
    } finally {
      setLoading(false);
    }
  };

  return { deleteCollection, loading, error, successMessage };
};
