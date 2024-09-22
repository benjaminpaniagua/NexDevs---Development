import '../../index.css'
import { useFetchReviews } from '../../hooks/WorkProfile/useFetchWorkProfileReviews';
import { CardReviews } from '../ui/Cards/CardReviews';
import { SecondaryButtonOutline } from '../ui/Buttons';

export function Reviews() {
    const reviews = useFetchReviews().slice(0, 4);

    return (
        <>
            <div className="flex flex-col gap-2 pr-10 md:pr-0">
                <h3 className="font-clash font-medium md:text-[1.5rem]">Reviews</h3>

                <div className="flex flex-col gap-4">
                    {reviews.map((review, index) => (
                        <CardReviews
                        key={index}
                        userName={review.userName}
                        profilePicture={review.profilePicture}
                        comment={review.comment}
                        rate={review.rate}
                        />
                    ))}
                </div>
                
                <div className='flex justify-center'>
                    <SecondaryButtonOutline text="Ver más" extraStyles={"px-16 py-2 mt-5"} />
                </div>

            </div>
        </>
    );
}