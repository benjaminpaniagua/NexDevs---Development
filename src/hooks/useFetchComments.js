// Custom Hook for Fetching Comments
import { useState, useEffect } from "react";

export const useFetchComments = (postId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    setLoading(true);
    const url = `https://nexdevsapi.somee.com/Comments/ConsultarPorPost?postId=${postId}`;

    try {
      const response = await fetch(url, { method: "GET", headers: { accept: "application/json" } });
      if (!response.ok) throw new Error("Error fetching comments");

      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return { comments, fetchComments, loading };
};
