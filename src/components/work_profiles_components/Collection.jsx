import '../../index.css'
export function Collection() {
    return (
        <>
            <div className="">
                <h3 className="font-clash font-medium md:text-[1.5rem]">Mi colección</h3>
                <div className='grid grid-cols-2 justify-items-center pt-2 gap-6'>
                    <div className='w-[300px] sm:w-[150px] rounded-2xl shadow-lg overflow-hidden'>
                        <img className="w-full h-full object-cover" src="/images/default_collection.webp" alt="collection image" />
                    </div>
                    <div className='w-[300px] sm:w-[150px] rounded-2xl shadow-lg overflow-hidden'>
                        <img className="w-full h-full object-cover" src="/images/default_collection.webp" alt="collection image" />
                    </div>
                    <div className='w-[300px] sm:w-[150px] rounded-2xl shadow-lg overflow-hidden'>
                        <img className="w-full h-full object-cover" src="/images/default_collection.webp" alt="collection image" />
                    </div>
                    <div className='w-[300px] sm:w-[150px] rounded-2xl shadow-lg overflow-hidden'>
                        <img className="w-full h-full object-cover" src="/images/default_collection.webp" alt="collection image" />
                    </div>
                </div>
            </div>
        </>
    );
}