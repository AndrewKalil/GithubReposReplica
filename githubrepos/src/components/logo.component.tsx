import React from "react";
import { useNavigate } from "react-router-dom";

const LogoComponent = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("");
  };

  return (
    <div
      onClick={navigateHome}
      className="cursor-pointer lg:w-1/4 w-1/2 h-full logo text-md lg:text-2xl flex items-center justify-center "
    >
      HelloBuild Test
    </div>
  );
};

export default LogoComponent;
