import { useState } from "react";
import PropTypes from 'prop-types';
export function Search_Input({ search }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    search(value);
  };
  
  return (
    <div>
      <form className="flex">
      <input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleInputChange}
          className="font-montserrat font-semibold border-2 border-clr-black rounded-lg text-sm w-full px-4 py-2 placeholder:text-clr-grey-light text-clr-grey-light"
        />
      </form>
    </div>
  );
}

Search_Input.propTypes = {
  search: PropTypes.func
}
