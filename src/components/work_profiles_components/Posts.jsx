import "../../index.css";
import { CardPost } from "../ui/Cards/CardPost";
import { SecondaryButtonOutline } from "../ui/Buttons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDeletePost } from "../../hooks/useDeletePost";
import Alert from "../ui/Alert";

export function Posts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const {
    deletePost,
    loading: loadingDelete,
    error: errorDelete,
  } = useDeletePost();
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    if (!userId) return;

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://nexdevsapi.somee.com/Posts/ConsultarWorkId?workId=${userId}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [userId]);

  const handleShowMore = () => {
    setShowAllPosts(true);
  };

  const handlePostDelete = async (postId) => {
    const result = await deletePost(postId);
    if (errorDelete) {
      setAlert({
        show: true,
        message: `Error: ${errorDelete}`,
        type: "error",
      });
    } else {
      setAlert({ show: true, message: "Publicación eliminada correctamente.", type: "success" });
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post.postId !== postId)
      );
    }
  };

  return (
    <>
      <Alert alert={alert} setAlert={setAlert} />
      <div className="flex flex-col gap-2">
        <h3 className="font-clash font-medium md:text-[1.5rem]">Posts</h3>
        <section className="flex flex-col gap-12">
          {Array.isArray(posts) && posts.length > 0 ? (
            <>
              {posts.slice(0, showAllPosts ? posts.length : 1).map((post) => (
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
              ))}

              {posts.length > 1 && (
                <div className="flex justify-center">
                  <SecondaryButtonOutline
                    text={showAllPosts ? "Ver menos" : "Ver más"}
                    extraStyles={"px-16 py-2"}
                    onClick={() => setShowAllPosts(!showAllPosts)}
                  />
                </div>
              )}
            </>
          ) : (
            <h5 className="text-center">No hay publicaciones disponibles.</h5>
          )}
        </section>
      </div>
    </>
  );
}
