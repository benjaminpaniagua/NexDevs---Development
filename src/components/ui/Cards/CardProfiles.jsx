import { MainButton } from "../Buttons";
import { ICONS } from "../ICONS";
import { useFetchWorkProfileCategories } from "../../../hooks/WorkProfile/useFetchWorkProfileCategory";
export function CardProfiles({
  image,
  name,
  category,
  biography,
  province,
  city,
  number,
  email,
  id,
  onClick,
}) {
  const { categories } = useFetchWorkProfileCategories({workID: id});
  //console.log(categories);

  return (
    <>
      {/* Profile Card */}
      <div className="h-auto md:w-auto flex flex-col gap-2 transition-all hover:scale-[.99]">
        {/* Profile Picture */}
        <div className="rounded-lg overflow-hidden">
          <img src={
            image === "ND" || image === "default_image_url"
              ? "/images/default_profile_picture.jpg"
              : image} 
          className="aspect-[4/3] w-full h-full rounded-lg object-cover" alt="Profile_Picture" />
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
                <img className="w-5" src="/images/icons/phone.svg" alt="icon-phone" />
                <h5 className="text-black font-bold text-fs-med">{number}</h5>
              </div>
              <div className="flex">
                {ICONS.star}
                {ICONS.star}
                {ICONS.star}
                {ICONS.star}
                {ICONS.star}
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
