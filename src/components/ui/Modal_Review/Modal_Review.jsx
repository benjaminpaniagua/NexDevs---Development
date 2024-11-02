import '../../../index.css';
import { useState, useEffect } from "react";
import { MainButton } from "../Buttons";
import { useFetchWorkUserData } from "../../../hooks/useFetchWorkUserData";

export function Modal_Review({ onClose }) {
    const { userData, loading } = useFetchWorkUserData();
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const [formData, setFormData] = useState({
        reviewComment: '',
        userId: 0,
        workId: 0,
    });

    useEffect(() => {
        if (userData) {
            setFormData({
                ...formData,
                userId: userData?.userId || 0,
                workId: userData?.workId || 0,
            });
        }
    }, [loading]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index) => {
        setRating(rating === index ? 0 : index);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(rating, formData);

        /*if (formData.userId != "0") {
            alert("Es usuario");
        }

        if (formData.workId != "0") {
            alert("Es trabajador");
        }*/
    };

    return (
        <>
                <div className="flex flex-col items-center bg-clr-white rounded-lg h-auto w-[30rem] md1:w-[22rem]">
                    <div className="pt-5 pb-2">
                        <h4>Tu opinión es importante</h4>
                    </div>

                    <p className='pb-3'>Califica el servicio brindado por el trabajador</p>

                    <form className="py-2 w-full px-12 md1:px-10" onSubmit={handleSubmit}>

                        <div className="flex gap-3 pb-5 justify-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    onMouseEnter={() => handleMouseEnter(star)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick(star)}
                                    className={`w-12 h-12 cursor-pointer transition-all duration-200 ${star <= (hoverRating || rating) ? 'fill-current text-[#2BAC69] scale-125' : 'stroke-current text-[#2BAC69]'
                                        }`}
                                    viewBox="0 0 37 37"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.0555 10.377L16.3222 4.76752C16.5796 4.43261 16.8785 4.18562 17.219 4.02655C17.5595 3.86774 17.9194 3.78833 18.2985 3.78833C18.6776 3.78833 19.0363 3.86774 19.3745 4.02655C19.7127 4.18562 20.0107 4.43261 20.2687 4.76752L24.5353 10.377L31.058 12.5839C31.6036 12.7678 32.0268 13.0832 32.3277 13.5299C32.6288 13.9764 32.7793 14.4697 32.7793 15.0099C32.7793 15.2595 32.7429 15.5097 32.6699 15.7608C32.5973 16.0121 32.4783 16.2461 32.3132 16.4629L28.0999 22.3479L28.2523 28.6541C28.262 29.3748 28.0191 29.9883 27.5236 30.4947C27.0281 31.0014 26.4358 31.2548 25.7466 31.2548C25.7283 31.2548 25.4982 31.2215 25.0564 31.1549L18.2954 29.2171L11.5402 31.1526C11.4093 31.205 11.2806 31.2351 11.1541 31.2429C11.0278 31.2508 10.9121 31.2548 10.8069 31.2548C10.1094 31.2548 9.51716 31.0004 9.0303 30.4917C8.54369 29.983 8.31309 29.3577 8.3385 28.616L8.49097 22.3083L4.26319 16.4396C4.10768 16.2097 3.99359 15.9698 3.92092 15.72C3.84799 15.4702 3.81152 15.2204 3.81152 14.9707C3.81152 14.4368 3.96386 13.9471 4.26853 13.5017C4.57294 13.0562 4.9992 12.7455 5.5473 12.5694L12.0555 10.377Z"
                                        stroke="#2BAC69"
                                        strokeWidth="2"
                                        fill={star <= (hoverRating || rating) ? '#2BAC69' : 'none'}
                                    />
                                </svg>
                            ))}
                        </div>

                        <textarea style={{ resize: "none" }} type="text" name='reviewComment' id="review"
                            value={formData.reviewComment} required
                            onChange={handleInputChange} className="w-full border-2 border-clr-black rounded-lg text-sm p-2 h-24 md1:h-32"
                            placeholder="Escribe tu opinion" />

                        <div className='pt-5 w-full px-12 md1:px-10'>
                            <MainButton text="Calificar" type="submit" extraStyles="w-full" />
                        </div>
                    </form>

                    <p className='py-4 cursor-pointer' onClick={onClose}>Talvez despues</p>
                </div>
        </>
    )

}