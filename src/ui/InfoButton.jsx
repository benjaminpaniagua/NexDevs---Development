import PropTypes from "prop-types";

const InfoButton = ({ text, sizeX, sizeY, onClick }) => {
  const paddingClassX = sizeX === "L" ? "px-16" : "px-12";
  const paddingClassY = "py-4";

  return (
    <div className="transition-all flex gap-4">
      <button
        onClick={onClick}
        className={`${paddingClassX} ${paddingClassY} bg-clr-green-light text-black hover:text-white rounded transition-all duration-500 hover:bg-clr-green-dark border-2 border-clr-black`}
      >
        {text}
      </button>
    </div>
  );
};

InfoButton.propTypes = {
  text: PropTypes.string.isRequired,
  sizeX: PropTypes.oneOf(["L", "S"]),
  sizeY: PropTypes.oneOf(["L", "S"]),
  onClick: PropTypes.func,
};

export default InfoButton;
