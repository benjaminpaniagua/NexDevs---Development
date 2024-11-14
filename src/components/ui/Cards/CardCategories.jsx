import PropTypes from "prop-types";

const CardCategories = ({ title, imageUrl, onClick }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer hover:scale-95 transition-transform"
      onClick={onClick}
    >
      <img
        src={
          imageUrl === "ND" || imageUrl === "default_image_url"
            ? "/images/categories/aire-acondicionado.jpg"
            : imageUrl
        }
        alt={title}
        className="w-full h-40 object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out group-hover:bg-opacity-10">
        <span className="text-white font-montserrat text-fs-med font-semibold transition-opacity duration-300 ease-in-out group-hover:opacity-0">
          {title}
        </span>
      </div>
    </div>
  );
};

CardCategories.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CardCategories;
