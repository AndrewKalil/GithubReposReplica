import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./navbar.component";

const MainApp = () => {
  return (
    <div className="flex flex-col" style={{ height: "100vh", width: "100vw" }}>
      <div className="h-20 w-full flex-none">
        <NavbarComponent />
      </div>
      <div className="grow overflow-auto py-10">{<Outlet />}</div>
    </div>
  );
};

export default MainApp;
