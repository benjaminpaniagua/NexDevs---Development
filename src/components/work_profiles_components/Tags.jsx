import '../../index.css'
export function Tags({ text }) {
    return (
        <>
            <div className='bg-[#1558C610] rounded-lg w-auto py-2 px-4'>
                <p className='italic font-medium text-black'>{text}</p>
            </div>
        </>
    );
}