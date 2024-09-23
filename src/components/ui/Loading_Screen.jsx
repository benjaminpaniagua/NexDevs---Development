import { useState, useEffect } from 'react';

export function Loading_Screen({ Loading }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimating, setIsAnimating] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoading(Loading);
        if (Loading === false) {
            setTimeout(() => {
                setIsAnimating(false);
            }, 450);
            setTimeout(() => {
                setIsLoaded(true);
            }, 470);
        }
    }, [Loading]);

    return (
        <>
            {!isLoaded && (
                <div className={`fixed inset-0 z-10 bg-clr-white h-screen flex items-center justify-center transition-all duration-200 delay-200 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`fixed inset-0 z-10 bg-clr-white h-screen flex items-center justify-center ${isAnimating ? 'flex' : 'hidden'}`}>
                        <h1 className='font-semibold'>Cargando</h1>
                    </div>
                </div>
            )}
        </>
    )
}  