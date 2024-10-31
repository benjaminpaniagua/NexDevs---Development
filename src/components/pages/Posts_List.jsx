import "../../index.css";
import { useState, useEffect } from "react";
import { CardPost } from "../ui/Cards/CardPost";
import { SecondaryButtonOutline } from "../ui/Buttons";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { Loading_Screen } from "../ui/Loading_Screen.jsx";
import { useNavigate } from "react-router-dom";
import { useFetchWorkUserData } from "../../hooks/useFetchWorkUserData.js";
import { useDeletePost } from "../../hooks/useDeletePost";
import Alert from "../ui/Alert";

export function Posts_List() {
  const { data: posts, error, loading } = useFetchPosts();
  const {
    deletePost,
    loading: loadingDelete,
    error: errorDelete,
  } = useDeletePost();
  const { userData } = useFetchWorkUserData();

  const [postList, setPostList] = useState([]); // Estado local para manejar la lista de publicaciones
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Sincroniza el estado local `postList` con los datos iniciales de `posts`
  useEffect(() => {
    console.log("Datos de publicaciones recibidos:", posts);
    if (posts) {
      setPostList(posts);
      console.log("Lista de publicaciones actualizada:", posts);
    }
  }, [posts]);

  const handlePostDelete = async (postId) => {
    const result = await deletePost(postId);
    if (errorDelete) {
      setAlert({
        show: true,
        message: `Error: ${errorDelete}`,
        type: "error",
      });
    } else {
      setAlert({ show: true, message: result, type: "success" });
      setPostList((prevPosts) =>
        prevPosts.filter((post) => post.postId !== postId)
      );
    }
  };

  const renderTop = () => {
    return (
      <div className="flex justify-between">
        <h2 className="font-clash font-semibold text-4xl">Publicaciones</h2>
        {userData.profileType === "W" && isLoggedIn && (
          <SecondaryButtonOutline
            text="Crear publicación"
            extraStyles={"px-16 py-2"}
            onClick={() => navigate("/create-post")}
          />
        )}
      </div>
    );
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-6 py-14 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
        <Alert alert={alert} setAlert={setAlert} />
        <Loading_Screen Loading={loading || loadingDelete} />
        {renderTop()}
        <div className="grid grid-cols-auto-350 md:grid-cols-1 gap-12 md:gap-8 xs:gap-10">
          {Array.isArray(postList) && postList.length > 0 ? (
            postList.map((post) => (
              <CardPost
                key={post.postId}
                postId={post.postId}
                imageUrl={post.postImageUrl}
                description={post.contentPost}
                likesCount={post.likesCount}
                commentsCount={post.commentsCount}
                userName={post.workProfile?.name}
                profilePictureUrl={post.workProfile?.profilePictureUrl}
                workId={post.workProfile?.workId}
                onDelete={() => handlePostDelete(post.postId)}
              />
            ))
          ) : (
            <p>No hay publicaciones disponibles.</p>
          )}
        </div>
      </div>
    </>
  );
}
