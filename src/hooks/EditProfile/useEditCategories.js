import { useState } from "react";
import axios from "axios";

export const useEditCategories = () => {
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState(null);

  const editCategory = async (category) => {
    setEditLoading(true);
    try {
      const response = await axios.put(
        "https://nexdevsapi.somee.com/WorkCategories/Editar",
        category,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEditLoading(false);
      return { success: true, data: response.data };
    } catch (error) {
      setEditLoading(false);
      setEditError(error.response?.data || "Error al editar las categorias");
      return { success: false };
    }
  };

  return { editCategory, editLoading, editError };
};
