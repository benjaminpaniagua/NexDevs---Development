export function SecondaryButton({ text, width, paddingX, onClick }) {
    return (
        <>
            <button onClick={onClick} className={`text-black hover:text-white rounded-lg bg-clr-white hover:bg-clr-black border-2 border-clr-black py-2 transition-all duration-500 ${width} ${paddingX}`}>{text}</button>
        </>
    );
}

export function GreenButton({ text, width }) {
    return (
        <>
            <button className={`text-black hover:text-white rounded-lg bg-clr-green-light hover:bg-clr-green-dark border-2 border-clr-green-light hover:border-clr-green-dark transition-all py-2 duration-500 ${width}`}>{text}</button>
        </>
    );
}