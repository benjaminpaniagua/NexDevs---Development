import { Link } from "react-router-dom";
import "../../index.css";
import { MainButton } from "../ui/Buttons";
import { useFetchCollection } from "../../hooks/EditCollections/useFetchCollection";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ICONS } from "../ui/Icons";

export function Collection({ users, isOwner }) {
  const { collections } = useFetchCollection(users.workId);

  console.log("Colecciones", collections);

  const [previewImage1, setPreviewImage1] = useState(null);
  const [previewImage2, setPreviewImage2] = useState(null);
  const [previewImage3, setPreviewImage3] = useState(null);
  const [previewImage4, setPreviewImage4] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsImageModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const defaultImage = "/images/placeholder.jpg";

  useEffect(() => {
    if (collections.length > 0) {
      if (collections[0]) {
        setPreviewImage1(collections[0].collectionImageUrl);
      }
      if (collections[1]) {
        setPreviewImage2(collections[1].collectionImageUrl);
      }
      if (collections[2]) {
        setPreviewImage3(collections[2].collectionImageUrl);
      }
      if (collections[3]) {
        setPreviewImage4(collections[3].collectionImageUrl);
      }
    }
  }, [collections]);

  return (
    <>
      <div className="">
        {/* Modal para la imagen */}
        {isImageModalOpen && (
          <div
            className="fixed p-4 inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeImageModal}
          >
            <div className="relative">
              <button className="absolute bg-white rounded-full top-6 right-7 drop-shadow-lg">{ICONS.close}</button>
              <img
                src={selectedImage}
                alt="Imagen de colección"
                className="max-w-full p-2 max-h-screen object-contain rounded-3xl"
              />
            </div>
          </div>
        )}
        <div className="flex justify-between md:mt-12">
          <h3 className="font-clash font-medium md:text-[1.5rem]">
            Mi colección
          </h3>
          {isOwner && (
            <Link to={`/editCollection/${users.workId}`}>
              <MainButton text="Editar" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 justify-items-center pt-2 gap-2">
          <div className="rounded-md overflow-hidden max-w-[400px] w-full h-full object-cover aspect-video transition-all hover:scale-[1.02] cursor-pointer">
            <img
              onClick={() => {
                if (
                  previewImage1 !== "ND" &&
                  previewImage1 !== null &&
                  previewImage1 !== defaultImage
                ) {
                  openImageModal(previewImage1);
                }
              }}
              className="max-w-[400px] w-full h-full object-cover aspect-video"
              src={
                previewImage1 === "ND" || previewImage1 == null
                  ? defaultImage
                  : previewImage1
              }
              alt="collection image"
            />
          </div>

          <div className="rounded-md overflow-hidden max-w-[400px] w-full h-full object-cover aspect-video transition-all hover:scale-[1.02] cursor-pointer">
            <img
              onClick={() => {
                if (
                  previewImage2 !== "ND" &&
                  previewImage2 !== null &&
                  previewImage2 !== defaultImage
                ) {
                  openImageModal(previewImage2);
                }
              }}
              className="max-w-[400px] w-full h-full object-cover aspect-video"
              src={
                previewImage2 === "ND" || previewImage2 == null
                  ? defaultImage
                  : previewImage2
              }
              alt="collection image"
            />
          </div>

          <div className="rounded-md overflow-hidden max-w-[400px] w-full h-full object-cover aspect-video transition-all hover:scale-[1.02] cursor-pointer">
            <img
              onClick={() => {
                if (
                  previewImage3 !== "ND" &&
                  previewImage3 !== null &&
                  previewImage3 !== defaultImage
                ) {
                  openImageModal(previewImage3);
                }
              }}
              className="max-w-[400px] w-full h-full object-cover aspect-video"
              src={
                previewImage3 === "ND" || previewImage3 == null
                  ? defaultImage
                  : previewImage3
              }
              alt="collection image"
            />
          </div>
          <div className="rounded-md overflow-hidden max-w-[400px] w-full h-full object-cover aspect-video transition-all hover:scale-[1.02] cursor-pointer">
            <img
              onClick={() => {
                if (
                  previewImage4 !== "ND" &&
                  previewImage4 !== null &&
                  previewImage4 !== defaultImage
                ) {
                  openImageModal(previewImage4);
                }
              }}
              className="max-w-[400px] w-full h-full object-cover aspect-video"
              src={
                previewImage4 === "ND" || previewImage4 == null
                  ? defaultImage
                  : previewImage4
              }
              alt="collection image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

Collection.propTypes = {
  users: PropTypes.object,
  isOwner: PropTypes.bool,
};
