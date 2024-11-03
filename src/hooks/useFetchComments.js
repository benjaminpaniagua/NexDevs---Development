import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchComments = (postId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    setLoading(true);
    const url = `https://nexdevsapi.somee.com/Comments/ConsultarPorPost?postId=${postId}`;

    try {
      const response = await axios.get(url, {
        headers: { accept: "application/json" },
      });

      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return { comments, fetchComments, loading };
};
