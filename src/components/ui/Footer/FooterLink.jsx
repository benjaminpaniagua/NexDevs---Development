import { useNavigate } from "react-router-dom";

export const FooterLink = ({ linkText, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-4 md:items-center items-start">
      <a
        onClick={() => navigate(linkUrl)}
        className="text-clr-black font-medium underline-animated hover:text-clr-blue-hover cursor-pointer"
      >
        {linkText}
      </a>
    </div>
  );
};
