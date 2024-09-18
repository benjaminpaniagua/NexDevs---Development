export function MainButton({ text, extraStyles, onClick, disabled }) {
    if (disabled) {
        return (
            <>
                <button onClick={onClick} className={`text-clr-white bg-clr-grey rounded-lg border-2 border-clr-grey transition-all duration-500 py-2 brightness-[1.5] ${extraStyles}`}>{text}</button>
            </>
        );
    } else {
        return (
            <>
                <button onClick={onClick} className={`text-clr-white hover:text-clr-green-dark bg-clr-black rounded-lg border-2 border-clr-black transition-all duration-500 py-2 ${extraStyles}`}>{text}</button>
            </>
        );
    }
}

export function SecondaryButton({ text, extraStyles, onClick, disabled }) {
    if (disabled) {
        return (
            <>
                <button onClick={onClick} className={`text-clr-black bg-clr-green-light rounded-lg border-2 border-clr-green-light transition-all duration-500 py-2 saturate-50 ${extraStyles}`}>{text}</button>
            </>
        );
    } else {
        return (
            <>
                <button onClick={onClick} className={`text-clr-black hover:text-clr-white bg-clr-green-light hover:bg-clr-green-dark rounded-lg border-2 border-clr-green-light hover:border-clr-green-dark transition-all duration-500 py-2 ${extraStyles}`}>{text}</button>
            </>
        );
    }
}

export function SecondaryButtonOutline({ text, extraStyles, onClick, disabled }) {
    if (disabled) {
        return (
            <>
                <button onClick={onClick} className={`text-clr-black bg-clr-white rounded-lg border-2 border-clr-black transition-all duration-500 py-2 opacity-50 ${extraStyles}`}>{text}</button>
            </>
        );
    } else {
        return (
            <>
                <button onClick={onClick} className={`text-clr-black hover:text-clr-white bg-clr-white hover:bg-clr-black rounded-lg border-2 border-clr-black transition-all duration-500 py-2 ${extraStyles}`}>{text}</button>
            </>
        );
    }
}