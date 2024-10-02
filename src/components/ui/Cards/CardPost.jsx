import React from "react";
import { ICONS } from "../ICONS";
import { SecondaryButton } from "../Buttons";

export function CardPost({
  title,
  imageUrl,
  description,
  user,
  profilepicture,
  onClick,
}) {
  return (
    <>
      {/* Post Card */}
      <div
        className="h-auto flex flex-col gap-2 transition-all"
        onClick={onClick}
      >
        {/* Post Picture */}
        <div className="rounded-lg overflow-hidden">
          <img src={imageUrl} alt="Profile_Picture" />
        </div>
        {/* Post Picture */}

        {/* Content */}
        <div className="flex flex-col px-4">
          {/* Post Title */}
          <h4 className="">{title}</h4>
          {/* Post Title */}

          {/* Post Description */}
          <p className="font-bold h-20 xs:h-14 mt-2 mb-4 xs:text-[0.65rem]">
            {description}
          </p>
          {/* Post Description */}

          {/* Bottom */}
          <div className="flex">
            {/* Autor */}
            <div className="flex cursor-pointer">
              <img
                src={profilepicture}
                alt="Foto de perfil"
                className="w-10 xs:w-8 rounded-full border-2 border-white object-cover"
              />
              <h5 className="ml-2 text-clr-black font-bold flex items-center xs:text-[0.5rem]">
                {user}
              </h5>
            </div>
            {/* Autor */}

            {/* Icons */}
            <div className="flex gap-3 xs:gap-1 items-center ml-auto">
              <button className="transition-all hover:scale-110">
                {ICONS.heart}
              </button>
              <h4 className="text-clr-black">0</h4>

              <button className="transition-all hover:scale-110">
                {ICONS.comment}
              </button>
              <h4 className="text-clr-black">0</h4>
            </div>

            {/* Icons */}
          </div>
          {/* Bottom */}
        </div>
        {/* Content */}

        <SecondaryButton
          text="Ver Publicación"
          extraStyles={`p-1 mt-5`}
          onClick={onClick}
        />
      </div>
    </>
  );
}
