

export function Search_Input() {
  return (
    <div>
      <form className="flex" action="#">
        <input
          type="text"
          placeholder="Buscar servicios"
          className="font-montserrat font-semibold text-sm w-full px-4 py-2 border md:hidden border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button className="bg-[#A9CC63] px-4 py-2 md:rounded-full md:py-4 md:px-4 rounded-r-md w-fit" type="submit">
            <p className="md:hidden font-montserrat font-bold text-clr-black">Buscar</p>
            {/* <img className="max-md:hidden" src="./images/search_icon.svg" alt="search icon" /> */}
        </button>
      </form>
    </div>
  );
}
