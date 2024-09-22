import '../../index.css'
import { useState } from 'react';
import { SecondaryButton } from '../ui/Buttons'
export function Community_Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted, searched for:', searchTerm);
    };

    return (
        <>
            <div className="flex md:flex-col justify-center rounded-xl gap-24 bg-clr-black p-24 xs:p-5 md:p-10">
                {/* Texto */}
                <div className='flex flex-col gap-10 my-auto'>
                    <h2 className='text-white sm:text-center sm:text-[0.9rem] sm:mt-2 sm:-mb-2'>¿Qué servicio estás buscando hoy?</h2>

                    {/* Searchbar */}
                    <form onSubmit={handleSubmit}>
                        <div className='bg-clr-white flex h-14 w-full rounded-lg overflow-hidden'>

                            <div className='flex justify-center pl-1 sm:hidden'>
                                <img className='w-1/2' src="/images/icons/search.svg" alt="Search Icon" />
                            </div>

                            <div className='flex w-full pl-2'>
                                <input
                                    id="search"
                                    type="text"
                                    className="w-full bg-clr-white sm:text-[0.8rem]"
                                    placeholder="Buscar entre todas las categorías..."
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                />
                            </div>

                            <div className='flex'>
                                <SecondaryButton text={"Buscar"} extraStyles={"px-10 py-2 sm:text-[0.8rem] sm:px-2"} onClick={handleSubmit} />
                            </div>

                        </div>
                    </form>
                    {/* Searchbar */}
                </div>
                {/* Texto */}

                {/* Imagen */}
                <div className='flex my-auto mx-auto sm:-mt-10'>
                    <img src="/images/communitySearch/Community_Search.svg" alt="" />
                </div>
                {/* Imagen */}
            </div>
        </>
    );
}