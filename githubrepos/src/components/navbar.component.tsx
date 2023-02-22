import React from "react";
import { NAVLINKS } from "../constants";
import LogoComponent from "./logo.component";
import NavlinkComponent from "./navlink.component";
import UserStatus from "./user_status.component";

const NavbarComponent = () => {
  return (
    <nav className="w-full h-full flex drop-shadow-md bg-white border-b border-gray-100">
      <LogoComponent />
      <div className="grow flex justify-start items-center">
        {NAVLINKS.map((link) => {
          return <NavlinkComponent key={link} link={link} />;
        })}
      </div>
      <div className="w-1/4 h-full">
        <UserStatus />
      </div>
    </nav>
  );
};

export default NavbarComponent;
