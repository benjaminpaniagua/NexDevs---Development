import { useState } from 'react';
import axios from 'axios';

export const useEditNormalUser = () => {
    const [editLoading, setEditLoading] = useState(false);
    const [editError, setEditError] = useState(null);

    const editProfile = async (formData) => {
        setEditLoading(true);
        try {
            const response = await axios.put('https://localhost:7038/Users/Editar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setEditLoading(false);
            return { success: true, data: response.data };
        } catch (error) {
            setEditLoading(false);
            setEditError(error.response?.data || 'Error al editar el perfil');
            return { success: false };
        }
    };

    return { editProfile, editLoading, editError };
};