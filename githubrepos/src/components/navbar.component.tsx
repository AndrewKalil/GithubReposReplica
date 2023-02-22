import React from "react";
import { NAVLINKS } from "../constants";
import LogoComponent from "./logo.component";
import NavlinkComponent from "./navlink.component";
import UserStatus from "./user_status.component";

const NavbarComponent = () => {
  return (
    <nav className="w-full h-full flex drop-shadow-md bg-white border-b border-gray-100">
      <LogoComponent />
      <div className="grow lg:flex justify-start items-center hidden ">
        {NAVLINKS.map((link) => {
          return <NavlinkComponent key={link.name} link={link.name} />;
        })}
      </div>
      <div className="lg:w-1/4 w-1/2 h-full">
        <UserStatus />
      </div>
    </nav>
  );
};

export default NavbarComponent;
