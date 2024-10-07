import React, { useState, useEffect } from "react";
import { ICONS } from "../Icons";
import { SecondaryButton } from "../Buttons";

export function CardPost({
  title,
  imageUrl,
  description,
  userName,
  profilePictureUrl,
  postId,
  likesCount,
  commentsCount,
  onClick,
}) {
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);

  const openModal = () => {
    setShowModal(true);
    fetchComments();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Desactivar scroll del body cuando el modal esté abierto
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

  // Cerrar el modal al hacer clic fuera de él
  const handleOutsideClick = (e) => {
    if (e.target.className.includes("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <>
      {/* Post Card */}
      <div
        className="h-auto flex flex-col gap-2 transition-all"
        onClick={onClick}
      >
        {/* Post Picture */}
        <div className="mx-auto rounded-lg overflow-hidden">
          <img className="w-[30rem]" src="/images/Post_Image_Placeholder.png" alt="Post_Image" />
        </div>

        {/* Content */}
        <div className="flex flex-col px-4">
          {/* Post Title */}
          <h4>{title}</h4>

          {/* Post Description */}
          <p className="font-normal h-20 xs:h-14 mt-2 mb-4 sm:text-fs-small">
            {description}
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
            <div className="flex gap-3 xs:gap-1 items-center ml-auto">
              <button className="transition-all hover:scale-110">
                {ICONS.heart}
              </button>
              <h4 className="text-clr-black">{likesCount}</h4>

              <button className="transition-all hover:scale-110">
                {ICONS.comment}
              </button>
              <h4 className="text-clr-black">{commentsCount}</h4>
            </div>
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
          className="modal-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex sm:p-4 items-center justify-center z-50 overflow-y-auto"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
            <div className="flex justify-between items-center w-full py-4 bg-white sticky top-[-16px] z-10">
              <div className="flex items-center">
                <div className="h-9 w-9 bg-gray-300 rounded-full flex items-center justify-center">
                  
                </div>
                <h3 className="text-lg font-semibold ml-4">{userName}</h3>
              </div>

              {/* Botón para cerrar el modal */}
              <button onClick={closeModal} className="text-black">
                {ICONS.close}
              </button>
            </div>
            <img className="rounded-lg" src={profilePictureUrl} alt={title} />
            {/* <h2 className="text-lg font-bold">{title}</h2> */}
            <p>{description}</p>
            <div className="mt-4">
              <h4>Comentarios:</h4>
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
