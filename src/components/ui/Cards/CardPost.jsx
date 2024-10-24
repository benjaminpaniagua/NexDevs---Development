import{ useState, useEffect } from "react";
import { ICONS } from "../ICONS";
import { SecondaryButton } from "../Buttons";
import { FormInput } from "../FormInput";
import { useFetchWorkUserData } from "../../../hooks/useFetchWorkUserData";
import { useCreateComments } from "../../../hooks/useCreateComments";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function CardPost({
  postId,
  workId,
  title,
  imageUrl,
  description,
  userName,
  profilePictureUrl,
  likesCount,
  commentsCount,
  onClick,
}) {
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [currentLikesCount, setCurrentLikesCount] = useState(likesCount);
  const { userData } = useFetchWorkUserData();
  const { createComments } = useCreateComments();
  const [postComment, setPostComment] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    if (userData) {
      fetchIsLiked();
    }
  }, [userData]); // Dependencia en userData para asegurarse de que esté cargado

  const fetchIsLiked = async () => {
    try {
      const userId = userData?.userId || 0; // Obtenemos userId desde userData
      const workProfileId = userData?.workId || 0; // Obtenemos workProfileId desde userData

      // Validar si ambos son null, no hacer la solicitud
      if (!userId && !workProfileId) {
        console.error(
          "No se ha encontrado userId ni workProfileId para verificar el like."
        );
        return;
      }

      // Construimos la URL con los parámetros correctos
      const url = `https://localhost:7038/Likes/CheckIfIsLiked?postId=${postId}&userId=${userId}&workProfileId=${workProfileId}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setIsLiked(data); // La respuesta es booleana, actualiza el estado de isLiked
        console.log("isLiked después de la actualización:", data);
      } else {
        console.error("Error al verificar si el post ha sido liked");
      }
    } catch (error) {
      console.error("Error al verificar si el post ha sido liked:", error);
    }
    console.log("isLiked", isLiked);
  };

  const handleLikePost = async () => {
    if (!isLoggedIn) {
      navigate("/Access_Panel/login");
      return;
    }

    const userId = userData?.userId || 0;
    const workProfileId = userData?.workId || 0;

    const urlLike = `https://localhost:7038/Likes/LikePost`;

    try {
      const response = await fetch(urlLike, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postId,
          userId: userId,
          workProfileId: workProfileId,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al dar like al post");
      }

      const data = await response.json();
      setIsLiked(!isLiked);
      setCurrentLikesCount((prevCount) =>
        isLiked ? prevCount - 1 : prevCount + 1
      );
    } catch (error) {
      console.error("Error al dar like al post:", error);
    }
  };

  const handleDislikePost = async () => {
    if (!isLoggedIn) {
      navigate("/Access_Panel/login");
      return;
    }

    const userId = userData?.userId || 0;
    const workProfileId = userData?.workId || 0;

    const urlDislike = `https://localhost:7038/Likes/DislikePost`;

    try {
      const response = await fetch(urlDislike, {
        method: "DELETE",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postId,
          userId: userId,
          workProfileId: workProfileId,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al dar dislike al post");
      }

      const data = await response.json();
      setIsLiked(false);
      setCurrentLikesCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    } catch (error) {
      console.error("Error al dar dislike al post:", error);
    }
  };

  const handleCommentChange = (e) => {
    setPostComment(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const fetchComments = async () => {
    const url = `https://localhost:7038/Comments/ConsultarPorPost?postId=${postId}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener los comentarios");
      }

      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error al obtener los comentarios:", error);
    }
  };

  const openModal = () => {
    setShowModal(true);
    fetchComments();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderCreateComment = () => {
    if (userData.profileType) {
      return (
        <form className="flex gap-2 my-5" onSubmit={handleCommentSubmit}>
          <FormInput
            id="create_comment"
            type="text"
            name="comment"
            minLength={0}
            placeholder="Añadir comentario..."
            value={postComment}
            onChange={handleCommentChange}
            className="border h-12 w-[80%] bg-clr-white border-black rounded p-1"
          />
          <SecondaryButton
            text="Comentar"
            type="submit"
            extraStyles="py-2 w-[20%]"
            disabled={!postComment}
          />
        </form>
      );
    }

    if (!userData.profileType) {
      return (
        <div className="flex gap-2 my-5">
          <FormInput
            id="create_comment"
            name="comment"
            minLength={0}
            value="Inicia sesion para comentar"
            className="border h-12 w-[80%] bg-clr-white border-black rounded p-1"
          />
          <Link className="w-[20%]" to="/Access_Panel/login">
            <SecondaryButton
              text="Únete"
              type="button"
              extraStyles="py-2 w-full"
            />
          </Link>
        </div>
      );
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!postComment) {
      console.log("No hay valor");
      return;
    }

    let commentData;

    if (userData.profileType === "W") {
      commentData = {
        commentId: 0,
        postId: postId,
        userId: 0,
        workId: userData.workId,
        contentComment: postComment,
        createAt: new Date().toISOString(),
        likesCount: 0,
      };
    }
    if (userData.profileType === "U") {
      commentData = {
        commentId: 0,
        postId: postId,
        userId: userData.userId,
        workId: 0,
        contentComment: postComment,
        createAt: new Date().toISOString(),
        likesCount: 0,
      };
    }

    console.log(userData.profileType);

    try {
      const response = await createComments(commentData);
      console.log("Comentario enviado exitosamente", response);
      setPostComment("");
      fetchComments(); // Llama a fetchComments después de enviar el comentario
    } catch (error) {
      console.error("Error al enviar el comentario", error);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  // const handleOutsideClick = (e) => {
  //   if (e.target.className.includes("modal-overlay")) {
  //     closeModal();
  //   }
  // };

  return (
    <>
      {/* Post Card */}
      <div
        className="h-auto flex flex-col gap-2 transition-all"
        onClick={onClick}
      >
        {/* Post Picture */}
        <div className="rounded-lg overflow-hidden">
          <img
            className="aspect-[4/3] w-full h-full object-cover"
            src={
              imageUrl === "ND" || imageUrl === "default_image_url"
                ? "/images/placeholder.jpg"
                : imageUrl
            }
            alt="Post_Image"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col ">
          {/* Post Title */}
          <h4>{title}</h4>

          {/* Post Description */}
          <p className="font-normal h-20 sm:h-fit mt-2 mb-4 sm:text-fs-small">
            {description.length > 200
              ? description.substring(0, 200) + "..."
              : description}
          </p>

          {/* Bottom */}
          <div className="flex">
            {/* Autor */}
            <Link to={`/workprofile/${workId}`}>
              <div className="flex cursor-pointer">
                <img
                  src={
                    profilePictureUrl === "ND" || profilePictureUrl === "default_image_url"
                      ? "/images/default_profile_picture.jpg"
                      : profilePictureUrl
                  }
                  alt="Foto de perfil"
                  className="max-w-10 aspect-square rounded-full border-2 border-white object-cover"
                />
                <h5 className="ml-2 text-clr-black font-bold flex items-center sm:text-fs-small">
                  {userName}
                </h5>
              </div>
            </Link>
            {/* Icons */}
            {/* Íconos */}
            <section className="flex gap-3 xs:gap-2 items-center ml-auto">
              <div className="flex gap-1 items-center">
                <button
                  className="transition-all hover:scale-110"
                  onClick={isLiked ? handleDislikePost : handleLikePost}
                >
                  {isLiked ? ICONS.heart_filled : ICONS.heart}
                </button>
                <h4 className="text-clr-black font-bold">
                  {currentLikesCount}
                </h4>
              </div>
              <div className="flex gap-1 items-center">
                <button className="transition-all hover:scale-110" onClick={openModal}>
                  {ICONS.comment}
                </button>
                <h4 className="text-clr-black font-bold">{commentsCount}</h4>
              </div>
            </section>
          </div>
        </div>

        <SecondaryButton
          text="Ver Publicación"
          extraStyles={`p-1 mt-5`}
          onClick={openModal}
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-start sm:items-center justify-center z-50 overflow-y-auto"
        // onClick={handleOutsideClick}
        >
          <div className="bg-white sm:p-4 p-6 rounded-lg m-4 max-w-5xl w-full relative h-fit">
            <div className="flex justify-between items-center w-full pb-4 bg-white sticky top-[-16px] z-10">
              <Link to={`/workprofile/${workId}`}>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <img
                      src={
                        profilePictureUrl === "ND" || profilePictureUrl === "default_image_url"
                          ? "/images/default_profile_picture.jpg"
                          : profilePictureUrl
                      }
                      alt="Foto de perfil"
                      className="aspect-square rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <h3 className="text-fs-large font-bold ml-3">{userName}</h3>
                </div>
              </Link>

              {/* Botón para cerrar el modal */}
              <button onClick={closeModal} className="text-black">
                {ICONS.close}
              </button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                className="aspect-[4/3] w-full h-full mb-5"
                src={
                  imageUrl === "ND" || imageUrl === "default_image_url"
                    ? "/images/placeholder.jpg"
                    : imageUrl
                }
                alt="Post_Image"
              />
            </div>
            {/* Icons */}
            <section className="flex gap-3 xs:gap-2 items-center ml-auto">
              <div className="flex gap-1 items-center">
                <button
                  className="transition-all hover:scale-110"
                  onClick={isLiked ? handleDislikePost : handleLikePost}
                >
                  {isLiked ? ICONS.heart_filled : ICONS.heart}
                </button>
                <h4 className="text-clr-black font-bold">
                  {currentLikesCount}
                </h4>
              </div>
              <div className="flex gap-1 items-center">
                <button className="transition-all hover:scale-110">
                  {ICONS.comment}
                </button>
                <h4 className="text-clr-black font-bold">{commentsCount}</h4>
              </div>
            </section>

            <p>{description}</p>
            <div className="mt-4">
              <h4 className="font-bold">Comentarios:</h4>
              <div className="mt-2">
                {comments.length > 0 ? (
                  comments
                    .sort((a, b) => new Date(b.createAt) - new Date(a.createAt))
                    .map((comment) => (
                      <div
                        key={comment.commentId}
                        className="border-b border-gray-200 py-2"
                      >
                        {comment.workId && (
                          <Link to={`/workprofile/${comment.workId}`}>
                            <div className="flex items-center">
                              <img
                                src={
                                  comment.profilePictureUrlWorker === "ND" ||
                                    !comment.profilePictureUrlWorker
                                    ? "/images/default_profile_picture.jpg"
                                    : comment.profilePictureUrlWorker
                                }
                                alt="Foto de perfil"
                                className="w-8 h-8 rounded-full mr-2"
                              />
                              <h5 className="font-bold">
                                {comment.firstName}{" "}
                                {comment.lastName || comment.name || ""}
                              </h5>
                            </div>
                          </Link>
                        )}

                        {comment.userId && (
                          <div className="flex items-center">
                            <img
                              src={
                                comment.profilePictureUrlUser === "ND" ||
                                  !comment.profilePictureUrlUser
                                  ? "/images/Profile_Placeholder.png"
                                  : comment.profilePictureUrlUser
                              }
                              alt="Foto de perfil"
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            <h5 className="font-bold">
                              {comment.firstName}{" "}
                              {comment.lastName || comment.name || ""}
                            </h5>
                          </div>
                        )}
                        <p>{comment.contentComment}</p>
                      </div>
                    ))
                ) : (
                  <p>No hay comentarios aún.</p>
                )}
              </div>
            </div>
            {/*Comentar*/}
            {renderCreateComment()}
          </div>
        </div>
      )}
    </>
  );
}
