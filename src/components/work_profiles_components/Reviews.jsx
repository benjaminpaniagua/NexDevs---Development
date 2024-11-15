import "../../index.css";
import { useFetchReviews } from "../../hooks/WorkProfile/useFetchWorkProfileReviews";
import { CardReviews } from "../ui/Cards/CardReviews";
import { SecondaryButtonOutline } from "../ui/Buttons";
import PropTypes from "prop-types";
import { useState } from "react";

export function Reviews({ workId, isAddedReview }) {
  const { reviews, loading, error } = useFetchReviews({ workID: workId, updated: isAddedReview });
  const [showAllReviews, setShowAllReviews] = useState(false);


  // Define the number of reviews to display by default
  const reviewsToShow = showAllReviews ? reviews.length : 6;

  return (
    <div className="flex flex-col gap-2 md:pr-0">
      <h3 className="font-clash font-medium md:text-[1.5rem]">Reviews</h3>
      {reviews.length === 0 && (
        <div className="text-center">
          <h5>No hay reseñas para mostrar.</h5>
        </div>
      )}
      {loading ? (
        <div className="text-center">
          <h5>Cargando reseñas...</h5>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          <h5>Error al cargar reseñas.</h5>
        </div>
      ) : (
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[690px] md1:max-h-[24rem]">
          {reviews.map((review, index) => (
            <CardReviews
              key={index}
              userName={review.firstName + " " + review.lastName}
              profilePicture={
                review.profilePictureUrlUser === "ND"
                  ? "/images/default_profile_picture.jpg"
                  : review.profilePictureUrlUser
              }
              comment={review.reviewComment}
              rate={review.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Reviews.propTypes = {
  workId: PropTypes.number.isRequired,
};
