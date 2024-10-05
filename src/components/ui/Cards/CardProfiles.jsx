import { MainButton } from '../Buttons'
import { ICONS } from '../Icons'
export function CardProfiles({ image, name, category, biography, province, city, number, email, onClick }) {
    return (
        <>
            {/* Profile Card */}
            <div className='h-auto md:w-auto flex flex-col gap-2 transition-all hover:scale-95'>
                {/* Profile Picture */}
                <div className='rounded-lg overflow-hidden'>
                    <img src={image} alt="Profile_Picture" />
                </div>
                {/* Profile Picture */}

                {/* Profile Info */}
                <div className='px-3 flex flex-col gap-1'>
                    <h3 className='font-semibold'>{name}</h3>
                    <h5 className='text-black'>{category}</h5>
                    <p className='h-16 xs:h-24 text-fs-med'>{biography}</p>
                </div>
                {/* Profile Info */}

                <div className='bg-clr-black w-[90%] h-0.5 mx-auto rounded-lg'/>

                <div className='flex px-3 h-16 xs:-mb-5'>
                    {/* Contact Info */}
                    <div className='flex flex-col w-full gap-1'>
                        <div className='flex gap-2'>
                            <img className='w-5 sm:w-3' src="/images/icons/gps.svg" alt="" />
                            <div className='flex flex-col gap-1'>
                                <h5 className='text-black font-bold xs:text-[0.65rem] md:text-[0.8rem] text-fs-med'>{city}, {province}</h5>
                                <h5 className='text-black font-bold xs:text-[0.65rem] md:text-[0.8rem] text-fs-med'></h5>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-5 sm:w-3' src="/images/icons/phone.svg" alt="" />
                            <h5 className='text-black font-bold xs:text-[0.65rem] md:text-[0.8rem] text-fs-med'>{number}</h5>
                        </div>
                        {/*
                        <div className='flex flex-wrap gap-2'>
                            <img className='w-5' src="/images/icons/email.svg" alt="" />
                            <h5 className='text-black font-bold'>{email}</h5>
                        </div>
                        */}
                    </div>
                    {/* Contact Info */}

                    {/* Rating Info */}
                    <div className=''>
                        <h5 className='text-black font-semibold text-right xs:text-[0.65rem] text-[1rem]'>(16 reseñas)</h5>
                        <div className="flex my-2">
                            {ICONS.star}
                            {ICONS.star}
                            {ICONS.star}
                            {ICONS.star}
                            {ICONS.star}
                        </div>
                    </div>
                    {/* Rating Info */}
                </div>

                {/* Button */}
                <div className='mt-6'>
                    <MainButton text="Ver Perfil" extraStyles={"px-16 py-2 w-full"} onClick={onClick} />
                </div>
                {/* Button */}
            </div>
            {/* Profile Card */}
        </>
    )
}