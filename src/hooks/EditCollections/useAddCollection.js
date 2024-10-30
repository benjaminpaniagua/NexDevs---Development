import { useState } from "react";
import axios from "axios";

export const useAddCollection = () => {
  const [collectionLoading, setCollectionLoading] = useState(false);
  const [collectionError, setCollectionError] = useState(null);
  const [message, setMessage] = useState(null);

  const addCollection = async (collectionImageUrl, workId) => {
    setCollectionLoading(true);
    setCollectionError(null);
    setMessage(null);

    const formData = new FormData();

    if (collectionImageUrl) {
      formData.append("CollectionImageUrl", collectionImageUrl);
    }

    try {
      const response = await axios.post(
        `http://nexdevsapi.somee.com//Collections/Agregar?WorkId=${workId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data);
      return { success: true, data: response.data };
    } catch (error) {
      setCollectionError(
        error.response?.data || "Error al agregar la colección"
      );
      return { success: false };
    } finally {
      setCollectionLoading(false);
    }
  };

  return { addCollection, collectionLoading, collectionError, message };
};
