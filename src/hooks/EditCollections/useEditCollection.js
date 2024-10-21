import { useState } from 'react';
import axios from 'axios';

export const useEditCollection = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const editCollection = async (collectionId, workId, collectionImageUrl) => {
        setLoading(true);
        setError(null);
        setSuccessMessage('');

        const formData = new FormData();

        if (collectionImageUrl) {
            formData.append('CollectionImageUrl', collectionImageUrl);
        }

        try {
            const response = await axios.put(
                `https://localhost:7038/Collections/Editar?CollectionId=${collectionId}&WorkId=${workId}`, 
                formData, 
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.status === 200) {
                setSuccessMessage(response.data);
            } else {
                setError('Error al editar la colección');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { editCollection, loading, error, successMessage };
};
