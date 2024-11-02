import { useState, useEffect } from "react";
import { useFetchWorkUserData } from "./useFetchWorkUserData";
import { useNavigate } from "react-router-dom";

const useLikePost = (postId, initialLikesCount) => {
  const { userData } = useFetchWorkUserData();
  const [currentLikesCount, setCurrentLikesCount] = useState(initialLikesCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  //CHECK IF USER IS LOGGED IN
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      if (userData) {
        fetchIsLiked();
      }
    }
  }, [userData]);

  //GET LIKES COUNT AND IF IS LIKED BY USER
  const fetchIsLiked = async () => {
    if (!userData) return;
    try {
      const userId = userData?.userId || 0;
      const workProfileId = userData?.workId || 0;
      const url = `https://nexdevsapi.somee.com/Likes/CheckIfIsLiked?postId=${postId}&userId=${userId}&workProfileId=${workProfileId}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setIsLiked(data);
      }
    } catch (error) {
      console.error("Error fetching liked status:", error);
    }
  };

  //UPDATE LIKES COUNT AND IS LIKED BY USER
  useEffect(() => {
    fetchIsLiked();
  }, [postId, userData]);

  //LIKE POST FUNCTION
  const handleLikePost = async () => {
    if (!isLoggedIn) {
      navigate("/Access_Panel/login");
      return;
    }
    const userId = userData?.userId || 0;
    const workProfileId = userData?.workId || 0;
    const urlLike = `https://nexdevsapi.somee.com/Likes/LikePost`;

    try {
      const response = await fetch(urlLike, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, userId, workProfileId }),
      });

      if (!response.ok) {
        throw new Error("Error al dar like al post");
      }

      setIsLiked(true);
      setCurrentLikesCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Error al dar like al post:", error);
    }
  };

  //DISLIKE POST FUNCTION
  const handleDislikePost = async () => {
    if (!isLoggedIn) {
      navigate("/Access_Panel/login");
      return;
    }
    const userId = userData?.userId || 0;
    const workProfileId = userData?.workId || 0;
    const urlDislike = `https://nexdevsapi.somee.com/Likes/DislikePost`;

    try {
      const response = await fetch(urlDislike, {
        method: "DELETE",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, userId, workProfileId }),
      });

      if (!response.ok) {
        throw new Error("Error al dar dislike al post");
      }

      setIsLiked(false);
      setCurrentLikesCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    } catch (error) {
      console.error("Error al dar dislike al post:", error);
    }
  };
  return {
    currentLikesCount,
    isLiked,
    handleLikePost,
    handleDislikePost,
  };
};

export default useLikePost;
