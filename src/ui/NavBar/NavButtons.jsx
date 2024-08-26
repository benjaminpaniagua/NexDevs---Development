import PropTypes from "prop-types";

const NavButtons = ({ logIn, registered }) => {
    return (
        <div className='transition-all flex gap-4'>
          <button className="px-4 py-2 text-white bg-clr-blue rounded hover:bg-clr-blue-hover transition-all duration-500">{logIn}</button>
          <button className="px-4 py-2 text-clr-black hover:text-clr-white border-2 border-clr-black rounded hover:bg-clr-black transition-all duration-500">{registered}</button>
        </div>
    );
  };

  
  export default NavButtons;
  