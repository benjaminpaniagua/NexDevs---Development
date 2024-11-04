import PropTypes from "prop-types";
export function CardReviews({
  userName,
  profilePicture,
  comment,
  rate,
  onClick,
}) {
  return (
    <>
      {/* Review Card */}
      <div
        className="bg-clr-black h-auto flex gap-5 rounded-2xl py-6 px-4"
        onClick={onClick}
      >
        {/* Profile Picture */}
        <img
          className="w-8 h-8 rounded-full border-2 border-white py-auto"
          src={profilePicture}
          alt=""
        />
        {/* Profile Picture */}

        {/* Review Content */}
        <div className="flex flex-col gap-1 my-auto">
          <h5 className="text-white font-montserrat font-semibold">
            {userName}
          </h5>
          <p className="text-clr-white">{comment}</p>
        </div>
        {/* Review Content */}

        {/* Rating */}
        <div className="flex gap-1 my-auto ml-auto">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-3 xs:w-2.5`}
              viewBox="0 0 37 37"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0555 10.377L16.3222 4.76752C16.5796 4.43261 16.8785 4.18562 17.219 4.02655C17.5595 3.86774 17.9194 3.78833 18.2985 3.78833C18.6776 3.78833 19.0363 3.86774 19.3745 4.02655C19.7127 4.18562 20.0107 4.43261 20.2687 4.76752L24.5353 10.377L31.058 12.5839C31.6036 12.7678 32.0268 13.0832 32.3277 13.5299C32.6288 13.9764 32.7793 14.4697 32.7793 15.0099C32.7793 15.2595 32.7429 15.5097 32.6699 15.7608C32.5973 16.0121 32.4783 16.2461 32.3132 16.4629L28.0999 22.3479L28.2523 28.6541C28.262 29.3748 28.0191 29.9883 27.5236 30.4947C27.0281 31.0014 26.4358 31.2548 25.7466 31.2548C25.7283 31.2548 25.4982 31.2215 25.0564 31.1549L18.2954 29.2171L11.5402 31.1526C11.4093 31.205 11.2806 31.2351 11.1541 31.2429C11.0278 31.2508 10.9121 31.2548 10.8069 31.2548C10.1094 31.2548 9.51716 31.0004 9.0303 30.4917C8.54369 29.983 8.31309 29.3577 8.3385 28.616L8.49097 22.3083L4.26319 16.4396C4.10768 16.2097 3.99359 15.9698 3.92092 15.72C3.84799 15.4702 3.81152 15.2204 3.81152 14.9707C3.81152 14.4368 3.96386 13.9471 4.26853 13.5017C4.57294 13.0562 4.9992 12.7455 5.5473 12.5694L12.0555 10.377Z"
                fill={index < 5 - rate ? "none" : "#2BAC69"}
              />
            </svg>
          ))}
        </div>
        {/* Rating */}
      </div>
      {/* Review Card */}
    </>
  );
}

CardReviews.propTypes = {
  userName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
