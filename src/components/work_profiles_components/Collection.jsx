import '../../index.css'
export function Collection() {
    return (
        <>
            <div className="">
                <h3 className="font-clash font-medium md:text-[1.5rem]">Mi colección</h3>
                <div className='grid grid-cols-2 justify-items-center pt-2 gap-2'>
                    <div className='rounded-md overflow-hidden'>
                        <img className="max-w-[400px] w-full h-full object-cover aspect-video" src="/images/placeholder.jpg" alt="collection image" />
                    </div>
                    <div className='rounded-md overflow-hidden'>
                        <img className="max-w-[400px] w-full h-full object-cover aspect-video" src="/images/placeholder.jpg" alt="collection image" />
                    </div>
                    <div className='rounded-md overflow-hidden'>
                        <img className="max-w-[400px] w-full h-full object-cover aspect-video" src="/images/placeholder.jpg" alt="collection image" />
                    </div>
                    <div className='rounded-md overflow-hidden'>
                        <img className="max-w-[400px] w-full h-full object-cover aspect-video" src="/images/placeholder.jpg" alt="collection image" />
                    </div>
                    
                </div>
            </div>
        </>
    );
}