import PropTypes from "prop-types";

const MainButton = ({ text, onClick }) => {

  return (
    <div className="transition-all flex gap-4">
      <button
        onClick={onClick}
        className='text-white bg-clr-black rounded transition-all duration-500 hover:text-clr-green-light px-16 py-4 md:px-8'
      >
        {text}
      </button>
    </div>
  );
};

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MainButton;
