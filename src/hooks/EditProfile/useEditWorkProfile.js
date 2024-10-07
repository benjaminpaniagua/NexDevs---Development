import { useState } from 'react';
import axios from 'axios';

export const useEditWorkProfile = () => {
    const [editLoading, setEditLoading] = useState(false);
    const [editError, setEditError] = useState(null);
  
    const editProfile = async (formData) => {
      setEditLoading(true);
      setEditError(null);
      let success = false;

    try {
      const response = await axios.put('https://localhost:7038/WorkProfile/Editar',{
          workId: formData.workId,
          name: formData.name,
          email: formData.email,
          number: formData.number,
          password: formData.password,
          province: formData.province,
          city: formData.city,
          workDescription: formData.workDescription,
          profilePictureUrl: formData.profilePictureUrl,
          profileType: formData.profileType,
        }
    );
    success = true;
    return { success, data: response.data };
  } catch (err) {
    setEditError(err.message);
    return { success, data: null };
  } finally {
    setEditLoading(false);
  }
};

return { editProfile, editLoading, editError };
};
