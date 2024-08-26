import React from "react";
import backgroundImage from "/images/header.png";

const Header = () => {
  return (
    <div
      className="relative w-full h-[90vh] flex items-center text-left bg-clr-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative z-10 p-16 flex flex-col gap-12">
        <h1>
          Connect Your <br /> Skills, Find Your <br /> Next Project
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Morbi quis venenatis bibendum aenean.
        </p>
      </div>
    </div>
  );
};

export default Header;
