import PropTypes from "prop-types";

const SecondaryButton = ({ text, sizeX, sizeY, onClick }) => {
  const paddingClassX = sizeX === "L" ? "px-16" : "px-12";
  const paddingClassY = "py-4";

  return (
    <div className="transition-all flex gap-4">
      <button
        onClick={onClick}
        className={`${paddingClassX} ${paddingClassY} underline text-clr-white hover:text-clr-green-dark rounded transition-all duration-500 hover:bg-clr-black border-2 border-clr-black`}
      >
        {text}
      </button>
    </div>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  sizeX: PropTypes.oneOf(["L", "S"]),
  sizeY: PropTypes.oneOf(["L", "S"]),
  onClick: PropTypes.func,
};

export default SecondaryButton;
