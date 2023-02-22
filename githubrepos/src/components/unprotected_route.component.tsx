import React, { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

const UnprotectedRouteComponent = ({ children }: PropsWithChildren) => {
  const isLogged = localStorage.getItem("user") ? true : false;
  const location = useLocation();

  if (isLogged) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default UnprotectedRouteComponent;
