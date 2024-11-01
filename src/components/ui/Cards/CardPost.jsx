import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { ICONS } from "../../ui/Icons";
import { SecondaryButton } from "../Buttons";
import { FormInput } from "../FormInput";

import { useFetchWorkUserData } from "../../../hooks/useFetchWorkUserData";
import { useCreateComments } from "../../../hooks/useCreateComments";
import { useDeletePost } from "../../../hooks/useDeletePost";
import { useDeleteComment } from "../../../hooks/useDeleteComments";
import useLikePost from "../../../hooks/useLikePost";
import { useFetchComments } from "../../../hooks/useFetchComments";

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
  onDelete,
}) {
  // Estado de autenticación y permisos de usuario
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);
  const [isWorker, setIsWorker] = useState(false);
  const { userData } = useFetchWorkUserData();

  // Estado de interacción del usuario (likes y comentarios)
  const [postComment, setPostComment] = useState("");
  const { createComments } = useCreateComments();
  const { deleteComment } = useDeleteComment();
  const {
    comments,
    fetchComments,
    loading: commentsLoading,
  } = useFetchComments(postId);

  const { currentLikesCount, isLiked, handleLikePost, handleDislikePost } =
    useLikePost(postId, likesCount);

  // Estado del modal
  const [showModal, setShowModal] = useState(false);

  // Estado de navegación y carga
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Estado de menú de opciones
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //OPEN AND CLOSE MODAL
  const openModal = () => {
    setShowModal(true);
    fetchComments();
  };
  const closeModal = () => {
    setShowModal(false);
  };

  //EVITAR SCRROLL EN EL BODY
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

  //CLOSE MODAL ON OUTSIDE CLICK
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("fixed")) {
      closeModal();
    }
  };

  // //CLICK DELETE POST
  const handleDeleteClick = () => {
    onDelete();
  };

  //CHECK IF USER IS AUTHOR OR WORKER
  useEffect(() => {
    if (userData) {
      if (userData.profileType === "W") {
        setIsWorker(true);
      }
      if (userData.profileType === "W" && userData.workId === workId) {
        setIsAuthor(true);
      }
    }
  }, [userData]);

  //POST OPTIONS (EDIT, DELETE) MENU
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  //HANDLE COMMENT DELETE
  const handleCommentDelete = async (commentId) => {
    const wasDeleted = await deleteComment(commentId);

    if (wasDeleted) {
      console.log("Comentario eliminado exitosamente");
      fetchComments(); // Actualiza los comentarios si se eliminó correctamente
    } else {
      console.error("No se pudo eliminar el comentario");
    }
  };

  //CREATE COMMENTS
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

  //HANDLE COMMENT CHANGE EVENT
  const handleCommentChange = (e) => {
    setPostComment(e.target.value);
  };

  //RENDER COMMENT FORM OR LOGIN BUTTON
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
            text=""
            icon={ICONS.send}
            type="submit"
            extraStyles="flex items-center justify-center py-2 w-[20%]"
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

  return (
    <>
      <div className="h-auto flex flex-col gap-2 transition-all">
        {/* Post Picture */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            className="aspect-[4/3] w-full h-full object-cover"
            src={
              imageUrl === "ND" || imageUrl === "default_image_url"
                ? "/images/placeholder.jpg"
                : imageUrl
            }
            alt="Post_Image"
          />
          {/* Dropdown Menu */}
          {/* Menu Button */}
          {isAuthor && (
            <button
              onClick={toggleMenu}
              className="transition-all duration-300 absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white rounded-full px-2 py-2"
            >
              {ICONS.menu_dots}
              <span className="sr-only">Más opciones</span>
            </button>
          )}
          {/* Menu */}
          {isMenuOpen && isAuthor && (
            <div className="absolute right-2 top-10 bg-white border rounded shadow-lg w-40">
              <div className="flex flex-col p-2">
                <button
                  onClick={() => {
                    console.log("Editar acción");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center p-2 text-left hover:bg-gray-100"
                >
                  Editar
                </button>
                <button
                  onClick={handleDeleteClick}
                  disabled={loading}
                  className={`flex items-center p-2 text-red-600 hover:bg-red-100 ${
                    loading ? "cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Eliminando..." : "Eliminar"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col">
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
            {/* Author */}
            <Link to={`/workprofile/${workId}`}>
              <div className="flex cursor-pointer">
                <img
                  src={
                    profilePictureUrl === "ND" ||
                    profilePictureUrl === "default_image_url"
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
                <button
                  className="transition-all hover:scale-110"
                  onClick={openModal}
                >
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
          className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-70"
          onClick={handleOutsideClick}
        >
          <div className="absolute top-4 right-10">
            {/* Botón para cerrar el modal */}
            <button onClick={closeModal} className="text-black p-3">
              {ICONS.close_white}
            </button>
          </div>
          <div className="max-w-5xl p-0 overflow-hidden bg-white rounded shadow-lg">
            <div className="flex h-[80vh]">
              {/* Left side - Image */}
              <div className="relative flex-1">
                <img
                  className="object-cover h-full w-full bg-gray-300"
                  src={
                    imageUrl === "ND" || imageUrl === "default_image_url"
                      ? "/images/placeholder.jpg"
                      : imageUrl
                  }
                  alt="Post_Image"
                />
              </div>
              {/* Right side - Comments */}
              <div className="flex flex-col w-[350px] bg-background">
                {/* Header */}
                <div className="p-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8">
                      <img
                        src={
                          profilePictureUrl === "ND" ||
                          profilePictureUrl === "default_image_url"
                            ? "/images/default_profile_picture.jpg"
                            : profilePictureUrl
                        }
                        alt="Foto de perfil"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h2 className="text-sm font-semibold">{userName}</h2>
                  </div>
                </div>
                {/* Comments section */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {comments.length > 0 ? (
                    comments
                      .sort(
                        (a, b) => new Date(b.createAt) - new Date(a.createAt)
                      )
                      .map((comment) => (
                        <div key={comment.commentId} className="flex gap-2">
                          <div className="w-8 h-8 ">
                            <img
                              src={
                                comment.profilePictureUrlWorker === "ND" ||
                                !comment.profilePictureUrlWorker
                                  ? "/images/default_profile_picture.jpg"
                                  : comment.profilePictureUrlWorker
                              }
                              alt="Foto de perfil"
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-6">
                              {comment.workId ? (
                                <Link
                                  to={`/workprofile/${comment.workId}`}
                                  className="text-sm font-semibold truncate"
                                >
                                  {comment.firstName}{" "}
                                  {comment.lastName || comment.name || ""}
                                </Link>
                              ) : (
                                <span className="text-sm font-semibold truncate">
                                  {comment.firstName}{" "}
                                  {comment.lastName || comment.name || ""}
                                </span>
                              )}
                              {comment.workId === userData.workId ||
                                (comment.userId === userData.userId && (
                                  <button
                                    className="text-xs text-muted-foreground"
                                    onClick={() =>
                                      handleCommentDelete(comment.commentId)
                                    }
                                  >
                                    {ICONS.trash}
                                    {/* {console.log(comment.commentId)} */}
                                  </button>
                                ))}
                            </div>
                            <p className="text-sm break-words">
                              {comment.contentComment}
                            </p>
                            {/* <div className="flex gap-4 mt-1">
                              <button className="text-xs text-muted-foreground">
                                Like
                              </button>
                              <button className="text-xs text-muted-foreground">
                                Reply
                              </button>
                            </div> */}
                          </div>
                        </div>
                      ))
                  ) : (
                    <p>No hay comentarios aún.</p>
                  )}
                </div>

                {/* Actions */}
                <div className="p-4 border-t">
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
                      <h4 className="text-clr-black font-bold">
                        {commentsCount}
                      </h4>
                    </div>
                  </section>
                  <div className="text-sm font-semibold mb-2">
                    {currentLikesCount} likes
                  </div>
                  {renderCreateComment()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

CardPost.propTypes = {
  postId: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  profilePictureUrl: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
  // currentLikesCount: PropTypes.number.isRequired,
  // isLiked: PropTypes.bool.isRequired,
  workId: PropTypes.number.isRequired,
  // userId: PropTypes.number.isRequired,
  // userIdWorker: PropTypes.number.isRequired,
};
