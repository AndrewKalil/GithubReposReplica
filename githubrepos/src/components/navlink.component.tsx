import React from "react";
import { NavLink } from "react-router-dom";

type NavlinkProps = {
  link: string;
};

const NavlinkComponent = ({ link }: NavlinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "lg:mr-8 mr-1 font-extrabold active-link"
          : "lg:mr-8 mr-1 font-extrabold"
      }
      key={link}
      to={link}
    >
      {link.toLocaleUpperCase()}
    </NavLink>
  );
};

export default NavlinkComponent;
