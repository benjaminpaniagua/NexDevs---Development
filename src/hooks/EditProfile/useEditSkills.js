import { useState } from "react";
import axios from "axios";

export const useEditSkills = () => {
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState(null);

  const editSkills = async (skills) => {
    setEditLoading(true);
    try {
      const response = await axios.put(
        "http://nexdevsapi.somee.com/WorkSkills/Editar",
        skills,
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
      setEditError(error.response?.data || "Error al editar las skills");
      return { success: false };
    }
  };

  return { editSkills, editLoading, editError };
};
