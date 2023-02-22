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
      className="cursor-pointer w-1/4 h-full logo text-2xl flex items-center justify-center"
    >
      HelloBuild Test
    </div>
  );
};

export default LogoComponent;
