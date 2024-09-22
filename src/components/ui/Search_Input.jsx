import { useState } from "react";

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
          className="font-montserrat font-semibold border-2 border-clr-black rounded-lg text-sm w-full px-4 py-2"
        />
      </form>
    </div>
  );
}