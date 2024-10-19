import PropTypes from "prop-types";

export function MainButton({
  text = "Button",
  asLink = false,
  extraStyles = "",
  onClick = () => { },
  disabled = false,
  type = "button",
  id,
  link,
}) {
  const baseStyles =
    "text-clr-white font-montserrat text-center rounded-lg border-2 transition-all duration-300";

  if (disabled) {
    return (
      <button type="button" className={`${baseStyles} bg-clr-grey border-clr-grey brightness-[1.5] cursor-default ${extraStyles}`}>
        {text}
      </button>
    );
  } else if (asLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} bg-clr-black border-clr-black hover:text-clr-green-dark ${extraStyles}`}
      >
        {text}
      </a>
    );
  } else {
    return (
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={`${baseStyles} bg-clr-black border-clr-black hover:text-clr-green-dark ${extraStyles}`}
      >
        {text}
      </button>
    );
  }
}

export function SecondaryButton({
  text = "Button",
  asLink = false,
  extraStyles = "",
  onClick = () => { },
  disabled = false,
  type = "button",
  id,
  link,
}) {
  const baseStyles =
    "text-clr-black rounded-lg border-2 transition-all duration-300";

  if (disabled) {
    return (
      <button
        type="button" className={`${baseStyles} bg-clr-green-light border-clr-green-light saturate-50 cursor-default ${extraStyles}`}
      >
        {text}
      </button>
    );
  } else if (asLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} bg-clr-green-light border-clr-green-light hover:bg-clr-green-dark ${extraStyles}`}
      >
        {text}
      </a>
    );
  } else {
    return (
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={`${baseStyles} bg-clr-green-light hover:bg-clr-green-dark rounded-lg border-2 border-clr-green-light hover:border-clr-green-dark transition-all duration-300 ${extraStyles}`}
      >
        {text}
      </button>
    );
  }
}

export function SecondaryButtonOutline({
  text = "Button",
  asLink = false,
  extraStyles = "",
  onClick = () => { },
  disabled = false,
  type = "button",
  id,
  link,
}) {
  const baseStyles =
    "text-clr-black rounded-lg border-2 transition-all duration-300";

  if (disabled) {
    return (
      <button
        type="button" className={`${baseStyles} bg-clr-white border-clr-black opacity-50 cursor-default ${extraStyles}`}
      >
        {text}
      </button>
    );
  } else if (asLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} bg-clr-white border-clr-black hover:bg-clr-black hover:text-clr-white ${extraStyles}`}
      >
        {text}
      </a>
    );
  } else {
    return (
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={`${baseStyles} bg-clr-white border-clr-black hover:bg-clr-black hover:text-clr-white ${extraStyles}`}
      >
        {text}
      </button>
    );
  }
}

export function SimpleButton({
  text = "Button",
  asLink = false,
  extraStyles = "",
  onClick = () => { },
  disabled = false,
  type = "button",
  id,
  link,
}) {
  if (disabled) {
    return (
      <button
        type="button" className={`underline text-clr-white hover:text-clr-green-dark transition-all duration-300 ${extraStyles}`}
      >
        {text}
      </button>
    );
  } else if (asLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`underline text-clr-white hover:text-clr-green-dark transition-all duration-300 ${extraStyles}`}
      >
        {text}
      </a>
    );
  } else {
    return (
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={`underline text-clr-white hover:text-clr-green-dark transition-all duration-300 ${extraStyles}`}
      >
        {text}
      </button>
    );
  }
}

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  extraStyles: PropTypes.string,
  asLink: PropTypes.bool,
  link: PropTypes.string,
};

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  extraStyles: PropTypes.string,
  asLink: PropTypes.bool,
  link: PropTypes.string,
};

SecondaryButtonOutline.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  extraStyles: PropTypes.string,
  asLink: PropTypes.bool,
  link: PropTypes.string,
};

SimpleButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  extraStyles: PropTypes.string,
  asLink: PropTypes.bool,
  link: PropTypes.string,
};
