import React, { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouteComponent = ({ children }: PropsWithChildren) => {
  let location = useLocation();
  const isLogged = localStorage.getItem("user") ? true : false;
  if (isLogged) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRouteComponent;
