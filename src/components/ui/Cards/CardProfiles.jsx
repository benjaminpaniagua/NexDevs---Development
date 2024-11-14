import { MainButton } from "../Buttons";
import { ICONS } from "../../ui/Icons";
import { useFetchWorkProfileCategories } from "../../../hooks/WorkProfile/useFetchWorkProfileCategory";
import PropTypes from "prop-types";
export function CardProfiles({
  image,
  name,
  category,
  biography,
  province,
  city,
  number,
  email,
  rating,
  id,
  onClick,
}) {
  const { categories } = useFetchWorkProfileCategories({ workID: id });
  const roundedRating = Math.round(rating);

  return (
    <>
      {/* Profile Card */}
      <div className="h-auto md:w-auto flex flex-col gap-2 transition-all hover:scale-[.99]">
        {/* Profile Picture */}
        <div className="rounded-lg overflow-hidden">
          <img
            onClick={onClick}
            src={
              image === "ND" || image === "default_image_url"
                ? "/images/default_profile_picture.jpg"
                : image
            }
            className="aspect-[4/3] w-full h-full rounded-lg object-cover"
            alt="Profile_Picture"
          />
        </div>
        {/* Profile Picture */}

        {/* Profile Info */}
        <div className=" flex flex-col gap-1 pt-2">
          <div className="h-12 md:h-8">
            <h4 className="font-semibold">{name}</h4>
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <h6 className="text-black font-bold">
                {category.categoryName.length > 12
                  ? category.categoryName.substring(0, 12) + "..."
                  : category.categoryName}
              </h6>
            ))}
          </div>
          <p className="text-black h-16 sm:h-fit text-fs-small lg:text-fs-small">
            {biography.length > 120
              ? biography.substring(0, 120) + "..."
              : biography}
          </p>
        </div>
        {/* Profile Info */}

        <div className="bg-clr-black w-full h-0.5 mx-auto rounded-lg" />

        <div className="flex h-14   items-end">
          {/* Contact Info */}
          <div className="flex flex-col w-full gap-2">
            <div className="flex gap-2 items-center">
              <img className="w-5" src="/images/icons/gps.svg" alt="icon-gps" />
              <div className="flex flex-col gap-1">
                <h5 className="text-black font-bold text-fs-med">
                  {city}, {province}
                </h5>
              </div>
            </div>
            <div className="flex gap-2 items-end justify-between">
              <div className="flex gap-2">
                <img
                  className="w-5"
                  src="/images/icons/phone.svg"
                  alt="icon-phone"
                />
                <h5 className="text-black font-bold text-fs-med">{number}</h5>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 md1:w-3 md1:h-3 ${
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
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <MainButton
            text="Ver Perfil"
            extraStyles={"px-16 py-2 w-full"}
            onClick={onClick}
          />
        </div>
        {/* Button */}
      </div>
      {/* Profile Card */}
    </>
  );
}

CardProfiles.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  biography: PropTypes.string.isRequired,
  province: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
