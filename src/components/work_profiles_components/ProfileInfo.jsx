import "../../index.css";
import {
  MainButton,
  SecondaryButtonOutline,
  SecondaryButton,
} from "../ui/Buttons";
import { ICONS } from "../ui/ICONS";
import { useAuth } from "../../utils/AuthProvider";
import { Link } from "react-router-dom";

export function ProfileInfo({ users, loading, isOwner }) {
  const { token } = useAuth();
  //console.log(users, "users");


  const renderProfilePicture = () => {

      return (
        <div className="absolute md:left-1/2 transform md:-translate-x-1/2 translate-x-2 -translate-y-1/2">
          <img
            src={
              users.profilePictureUrl === "ND" || users.profilePictureUrl === "default_image_url"
                ? "/images/default_profile_picture.jpg"
                : users.profilePictureUrl} 
            alt="Foto de perfil"
            className="w-56 h-56 md:w-40 md:h-40 rounded-full border-4 border-white object-cover"
          />
        </div>
      )
    
  };

  const renderUserInfo = () => (
    <div className="flex flex-col mt-28">
      <h2 className="font-clash text-fs-xlarge font-medium md:text-center">{users.name}</h2>
      <h4 className="font-medium text-fs-med text-clr-grey md:text-center">
        {users.city}, {users.province}
      </h4>
    </div>
  );

  const renderContactInfo = () => (
    <div className="flex flex-col gap-2 mt-5 font-bold">
      <div className="flex gap-2">
        {ICONS.phone}
        <h4>+506 {users.number}</h4>
      </div>
      <div className="flex gap-2">
        {ICONS.email}
        <h4>{users.email}</h4>
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

  const renderButtons = () => (
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
        <SecondaryButtonOutline
          text={"Dejar una Reseña"}
          extraStyles={"w-full py-2"}
          disabled={!token}
        />
      )}
    </div>
  );

  if (loading) {
    return <h3 className="text-center">Cargando perfiles...</h3>;
  }

  return (
    <div className="h-auto">
      {renderProfilePicture()}
      {renderUserInfo()}
      <div className="flex gap-2">
        <div className="flex my-2 md:justify-center">
          {ICONS.star}
          {ICONS.star}
          {ICONS.star}
        </div>
      </div>
      {renderButtons()}
      {renderAboutMe()}
      {renderContactInfo()}
    </div>
  );
}
