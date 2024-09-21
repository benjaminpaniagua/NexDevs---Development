export function CardPost({title, imageUrl, description, user, profilepicture, onClick}) {
    return (
        <>
            {/* Post Card */}
            <div className='h-auto flex flex-col gap-2 transition-all hover:scale-95' onClick={onClick}>

                {/* Post Picture */}
                <div className='rounded-lg overflow-hidden'>
                    <img src={imageUrl} alt="Profile_Picture" />
                </div>
                {/* Post Picture */}

                {/* Content */}
                <div className="flex flex-col px-4">
                    {/* Post Title */}
                    <h4 className="">{title}</h4>
                    {/* Post Title */}

                    {/* Post Description */}
                    <p className='font-bold h-20 xs:h-14 mt-2 mb-4 xs:text-[0.65rem]'>{description}</p>
                    {/* Post Description */}

                    {/* Bottom */}
                    <div className="flex">
                        {/* Autor */}
                        <div className="flex cursor-pointer">
                            <img src={profilepicture} alt="Foto de perfil" className="w-10 xs:w-8 rounded-full border-2 border-white object-cover" />
                            <h5 className="ml-2 text-clr-black font-bold flex items-center xs:text-[0.5rem]">{user}</h5>
                        </div>
                        {/* Autor */}

                        {/* Icons */}
                        <div className="flex gap-3 xs:gap-1 items-center ml-auto">
                            <button className="transition-all hover:scale-110">
                                <svg className="w-7 xs:w-5 fill-none stroke-clr-black transition-all hover:stroke-clr-blue" viewBox="0 0 28 25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.9551 3.15984C19.7371 1.24077 16.9285 2.01413 15.2413 3.24601C14.5494 3.75112 14.2035 4.00367 14 4.00367C13.7965 4.00367 13.4506 3.75112 12.7587 3.24601C11.0715 2.01413 8.26291 1.24077 5.04493 3.15984C0.821683 5.67843 -0.133936 13.9874 9.60743 20.9973C11.4629 22.3324 12.3906 23 14 23C15.6094 23 16.5372 22.3324 18.3926 20.9973C28.134 13.9874 27.1783 5.67843 22.9551 3.15984Z" strokeWidth="2.4" strokeLinecap="round" />
                                </svg>
                            </button>
                            <h4 className="text-clr-black">0</h4>

                            <button className="transition-all hover:scale-110">
                                <svg className="w-7 xs:w-5 fill-none stroke-clr-black transition-all hover:stroke-clr-blue" viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.76953 13.8077H15.4618M7.76953 9H11.6157" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.94116 17.8654C4.69106 17.7424 3.75457 17.3669 3.12651 16.7388C2 15.6124 2 13.7992 2 10.1731V9.69231C2 6.06612 2 4.25303 3.12651 3.12651C4.25303 2 6.06612 2 9.69231 2H13.5385C17.1646 2 18.9778 2 20.1042 3.12651C21.2308 4.25303 21.2308 6.06612 21.2308 9.69231V10.1731C21.2308 13.7992 21.2308 15.6124 20.1042 16.7388C18.9778 17.8654 17.1646 17.8654 13.5385 17.8654C12.9995 17.8774 12.5703 17.9184 12.1487 18.0144C10.9963 18.2797 9.92933 18.8693 8.87487 19.3836C7.37239 20.1162 6.62115 20.4825 6.1497 20.1395C5.24778 19.4678 6.12937 17.3864 6.32692 16.4231" strokeWidth="2.3" strokeLinecap="round" />
                                </svg>
                            </button>
                            <h4 className="text-clr-black">0</h4>
                        </div>
                        {/* Icons */}
                    </div>
                    {/* Bottom */}
                </div>
                {/* Content */}

            </div>
            {/* Post Card */}
        </>
    )
}