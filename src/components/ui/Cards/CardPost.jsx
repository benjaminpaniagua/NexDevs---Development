import React, { useState, useEffect } from "react";
import { ICONS } from "../Icons";
import { SecondaryButton } from "../Buttons";


export function CardPost({
  postId,
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
  const [isLiked, setIsLiked] = useState(likesCount > 0);
  const [currentLikesCount, setCurrentLikesCount] = useState(likesCount);

  const openModal = () => {
    setShowModal(true);
    // fetchComments();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLikePost = async () => {
    const urlLike = `https://localhost:7038/Posts/Like?postId=${postId}`;
    const urlDislike = `https://localhost:7038/Posts/Dislike?postId=${postId}`;
  
    if (isLiked) {
      setIsLiked(false);
      setCurrentLikesCount((prevCount) => prevCount - 1);
  
      try {
        const response = await fetch(urlDislike, {
          method: "POST",
          headers: {
            accept: "text/plain",
          },
        });
  
        if (!response.ok) {
          throw new Error("Error al dar dislike");
        }
        console.log("Dislike realizado correctamente");
      } catch (error) {
        console.error("Error al procesar la acción de dislike:", error);
        setIsLiked(true);
        setCurrentLikesCount((prevCount) => prevCount + 1);
      }
    } else {
      setIsLiked(true);
      setCurrentLikesCount((prevCount) => prevCount + 1); 
  
      try {
        const response = await fetch(urlLike, {
          method: "POST",
          headers: {
            accept: "text/plain",
          },
        });
  
        if (!response.ok) {
          throw new Error("Error al dar like");
        }
        console.log("Like realizado correctamente");
      } catch (error) {
        console.error("Error al procesar la acción de like:", error);
        setIsLiked(false);
        setCurrentLikesCount((prevCount) => prevCount - 1);
      }
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
            className="aspect-[4/3] object-cover"
            src={imageUrl || "/images/placeholder.jpg"}
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
            <div className="flex cursor-pointer">
              <img
                src="/images/Profile_Placeholder.png"
                alt="Foto de perfil"
                className="max-w-10 aspect-square rounded-full border-2 border-white object-cover"
              />
              <h5 className="ml-2 text-clr-black font-bold flex items-center sm:text-fs-small">
                {userName}
              </h5>
            </div>

            {/* Icons */}
            {/* Íconos */}
            <section className="flex gap-3 xs:gap-2 items-center ml-auto">
              <div className="flex gap-1 items-center">
                <button className="transition-all hover:scale-110" onClick={handleLikePost}>
                  {isLiked ? ICONS.heart_filled : ICONS.heart} {/* Cambiar icono basado en si está "liked" */}
                </button>
                <h4 className="text-clr-black font-bold">{currentLikesCount}</h4>
              </div>
              <div className="flex gap-1 items-center">
                <button className="transition-all hover:scale-110">
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
              <div className="flex items-center">
                <div className="h-9 w-9 bg-gray-300 rounded-full flex items-center justify-center">
                  <img
                    src="/images/Profile_Placeholder.png"
                    alt="Foto de perfil"
                    className="max-w-10 aspect-square rounded-full border-2 border-white object-cover"
                  />
                </div>
                <h3 className="text-fs-large font-bold ml-3">{userName}</h3>
              </div>

              {/* Botón para cerrar el modal */}
              <button onClick={closeModal} className="text-black">
                {ICONS.close}
              </button>
            </div>
            <div className="rounded-lg overflow-hidden w-fit">
              <img
                className="w-fit max-w-full "
                src={imageUrl || "/images/placeholder.jpg"}
                alt="Post_Image"
              />
            </div>
            {/* Icons */}
            <section className="flex gap-3 xs:gap-2 items-center ml-auto">
              <div className="flex gap-1 items-center">
                <button className="transition-all hover:scale-110" onClick={handleLikePost}>
                  {isLiked ? ICONS.heart_filled : ICONS.heart} {/* Cambiar icono basado en si está "liked" */}
                </button>
                <h4 className="text-clr-black font-bold">{currentLikesCount}</h4>
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
                  comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="border-b border-gray-200 py-2"
                    >
                      <h5 className="font-bold">{comment.user}</h5>
                      <p>{comment.comment}</p>
                    </div>
                  ))
                ) : (
                  <p>No hay comentarios aún.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
