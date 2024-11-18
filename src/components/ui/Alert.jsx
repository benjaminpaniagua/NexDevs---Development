import { useEffect } from "react";
import PropTypes from "prop-types";

const Alert = ({ alert, setAlert }) => {
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
        localStorage.removeItem("alert");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  if (!alert.show) return null;

  return (
    <div
      className={`fixed flex gap-3 place-items-center left-1/2 transform -translate-x-1/2 z-50 md:px-3 md:py-2 px-8 py-4 rounded-md 
            ${alert.type === "success" ? "bg-green-500" : "bg-red-500"} 
            bottom-auto translate-y-0 top-auto`}
    >
      {alert.type === "success" ? <div className="loader-small"></div> : null}
      <p className="text-white">{alert.message}</p>
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
};
