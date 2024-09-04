import PropTypes from "prop-types";

const InfoButton = ({ text, onClick }) => {

  return (
    <div className="transition-all flex gap-4">
      <button
        onClick={onClick}
        className='bg-clr-green-light text-black hover:text-white rounded transition-all duration-500 hover:bg-clr-green-dark border-2 border-clr-black px-16 py-4 md:px-8'
      >
        {text}
      </button>
    </div>
  );
};

InfoButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default InfoButton;
