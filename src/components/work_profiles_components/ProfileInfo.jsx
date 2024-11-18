import "../../index.css";
import { useState } from "react";
import {
  MainButton,
  SecondaryButtonOutline,
  SecondaryButton,
} from "../ui/Buttons";
// import { ICONS } from "../ui/ICONS";
import { ICONS } from "../ui/Icons";
import { useAuth } from "../../utils/AuthProvider";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Modal_Review } from "../ui/Modal_Review/Modal_Review";
export function ProfileInfo({
  users,
  loading,
  isOwner,
  userData,
  isAddedReview,
  onIsAddedReviewChange,
}) {
  const { token } = useAuth();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [localIsAddedReview, setLocalIsAddedReview] = useState(isAddedReview);
  const roundedRating = Math.round(users.averageRating);

  const toggleReviewStatus = () => {
    const newValue = !localIsAddedReview;
    setLocalIsAddedReview(newValue);
    onIsAddedReviewChange(newValue);
  };

  const handleNewReview = () => {
    toggleReviewStatus();
  };

  const handleOpenModal = () => {
    setIsAnimating(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 305);
  };

  // Lógica para abrir el modal de imagen
  const openImageModal = () => {
    setIsImageModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Función para cerrar el modal de imagen
  const closeImageModal = () => {
    setIsImageModalOpen(false);
    document.body.style.overflow = "";
  };

  const renderProfilePicture = () => {
    return (
      <div className="absolute md:left-1/2 transform md:-translate-x-1/2 translate-x-2 -translate-y-1/2">
        <img
          onClick={openImageModal}
          src={
            users.profilePictureUrl === "ND" ||
            users.profilePictureUrl === "default_image_url"
              ? "/images/default_profile_picture.jpg"
              : users.profilePictureUrl
          }
          alt="Foto de perfil"
          className="w-56 h-56 md:w-40 md:h-40 rounded-full border-4 border-white bg-white object-cover cursor-pointer"
        />
      </div>
    );
  };

  const renderUserInfo = () => (
    <div className="flex flex-col mt-28">
      <h2 className="font-clash text-fs-xlarge font-medium md:text-center">
        {users.name}
      </h2>
      <h4 className="font-medium text-fs-med text-clr-grey md:text-center">
        {users.city}, {users.province}
      </h4>
    </div>
  );

  const renderContactInfo = () => (
    <div className="flex flex-col gap-2 mt-5 font-bold">
      <div className="flex gap-2 items-center">
        {ICONS.phone}
        <h4 className="text-lg font-semibold">+506 {users.number}</h4>
      </div>
      <div className="flex gap-2">
        {ICONS.email}
        <h4 className="text-lg font-semibold">{users.email}</h4>
      </div>
      <MainButton
        text={"Contactar por WhatsApp"}
        extraStyles={"mt-4 py-2 w-full"}
        asLink={true}
        link={`https://wa.me/+506${users.number}?`}
        icon={ICONS.whatsapp}
      />
    </div>
  );

  const renderAboutMe = () => (
    <div className="flex flex-col gap-2 mt-5 h-32 md:h-auto">
      <h3 className="font-semibold text-lg ">Acerca de mí</h3>
      <p className="h-fit text-fs-med">{users.workDescription}</p>
      <div className="bg-clr-black w-full h-0.5 mx-auto rounded-lg mt-3" />
    </div>
  );

  const renderButtons = () => {
    if (userData.profileType === "W") {
      return (
        <div className="flex my-2 md:justify-center gap-4">
          {isOwner ? (
            <>
              <Link
                to={`/WorkUserEdit/${users.workId}`}
                className="w-[25%] lg:w-full"
              >
                <SecondaryButtonOutline
                  text="Editar Perfil"
                  extraStyles={"py-2 w-full"}
                />
              </Link>
              <Link to={"/create-post/"} className="w-[25%] lg:w-full">
                <SecondaryButton
                  text={"Publicar"}
                  extraStyles={"py-2 w-full"}
                />
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      );
    }

    if (userData.profileType === "U") {
      return (
        <div className="flex my-2 md:justify-center gap-4">
          <SecondaryButtonOutline
            text={"Dejar una Reseña"}
            extraStyles={"w-full py-2"}
            disabled={!token}
            onClick={handleOpenModal}
          />
        </div>
      );
    }
  };

  if (loading) {
    return <h3 className="text-center">Cargando perfiles...</h3>;
  }

  return (
    <div className="h-auto">
      {renderProfilePicture()}
      {renderUserInfo()}
      <div className="flex gap-2 md:justify-center">
        <div className="flex my-2 md:justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-6 h-6 ${
                star <= roundedRating
                  ? "fill-current text-[#2BAC69]"
                  : "stroke-current text-[#2BAC69]"
              }`}
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0555 10.377L16.3222 4.76752C16.5796 4.43261 16.8785 4.18562 17.219 4.02655C17.5595 3.86774 17.9194 3.78833 18.2985 3.78833C18.6776 3.78833 19.0363 3.86774 19.3745 4.02655C19.7127 4.18562 20.0107 4.43261 20.2687 4.76752L24.5353 10.377L31.058 12.5839C31.6036 12.7678 32.0268 13.0832 32.3277 13.5299C32.6288 13.9764 32.7793 14.4697 32.7793 15.0099C32.7793 15.2595 32.7429 15.5097 32.6699 15.7608C32.5973 16.0121 32.4783 16.2461 32.3132 16.4629L28.0999 22.3479L28.2523 28.6541C28.262 29.3748 28.0191 29.9883 27.5236 30.4947C27.0281 31.0014 26.4358 31.2548 25.7466 31.2548C25.7283 31.2548 25.4982 31.2215 25.0564 31.1549L18.2954 29.2171L11.5402 31.1526C11.4093 31.205 11.2806 31.2351 11.1541 31.2429C11.0278 31.2508 10.9121 31.2548 10.8069 31.2548C10.1094 31.2548 9.51716 31.0004 9.0303 30.4917C8.54369 29.983 8.31309 29.3577 8.3385 28.616L8.49097 22.3083L4.26319 16.4396C4.10768 16.2097 3.99359 15.9698 3.92092 15.72C3.84799 15.4702 3.81152 15.2204 3.81152 14.9707C3.81152 14.4368 3.96386 13.9471 4.26853 13.5017C4.57294 13.0562 4.9992 12.7455 5.5473 12.5694L12.0555 10.377Z"
                stroke="#2BAC69"
                strokeWidth="2"
                fill={star <= roundedRating ? "#2BAC69" : "none"}
              />
            </svg>
          ))}
        </div>
      </div>
      {renderButtons()}
      {renderAboutMe()}
      {renderContactInfo()}
      {/* Modal para la imagen */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImageModal}
        >
          <div className="relative">
            <button className="absolute bg-white rounded-full top-9 right-9 drop-shadow-lg">
              {ICONS.close}
            </button>
            <img
              src={
                users.profilePictureUrl === "ND" ||
                users.profilePictureUrl === "default_image_url"
                  ? "/images/default_profile_picture.jpg"
                  : users.profilePictureUrl
              }
              alt="Foto de perfil ampliada"
              className="max-w-full p-4 rounded-3xl bg-white max-h-screen object-contain"
            />
          </div>
        </div>
      )}

      {isModalOpen && (
        <div
          className={`absolute z-30 inset-0 flex items-center justify-center`}
        >
          <div
            className={`fixed inset-0 h-screen transition-opacity duration-300 bg-black bg-opacity-50 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseModal}
          ></div>
          {/* Contenedor del modal centrado */}
          <div
            className={`fixed rounded-lg transition-transform shadow-lg ${
              isAnimating ? "animate-modal-open" : "animate-modal-close"
            }`}
          >
            <Modal_Review
              onClose={handleCloseModal}
              workId={users.workId}
              userData={userData.userId}
              onNewReview={handleNewReview}
            />
          </div>
        </div>
      )}
    </div>
  );
}

ProfileInfo.propTypes = {
  users: PropTypes.object,
  loading: PropTypes.bool,
  isOwner: PropTypes.bool,
};
