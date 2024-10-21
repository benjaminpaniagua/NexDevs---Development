import { useState } from 'react';
import axios from 'axios';

export const useDeleteSkill = () => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);

  const deleteSkill = async (id) => {
    setDeleteLoading(true);
    setDeleteError(null);
    setDeleteMessage(null);
    
    try {
      const response = await axios.delete(`https://localhost:7038/WorkSkills/Eliminar?id=${id}`);
      setDeleteMessage(response.data);
    } catch (error) {
      setDeleteError(error.response?.data || 'Error al eliminar la categoría');
    } finally {
      setDeleteLoading(false);
    }
  };

  return { deleteSkill, deleteLoading, deleteError, deleteMessage };
};
