import PropTypes from "prop-types";

const MainButton = ({ text, sizeX, sizeY, onClick }) => {
  const paddingClassX = sizeX === "L" ? "px-16" : "px-12";
  const paddingClassY = "py-4";

  return (
    <div className="transition-all flex gap-4">
      <button
        onClick={onClick}
        className={`${paddingClassX} ${paddingClassY} text-white bg-clr-black rounded transition-all duration-500 hover:text-clr-green-light`}
      >
        {text}
      </button>
    </div>
  );
};

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  sizeX: PropTypes.oneOf(["L", "S"]),
  sizeY: PropTypes.oneOf(["L", "S"]),
  onClick: PropTypes.func,
};

export default MainButton;
