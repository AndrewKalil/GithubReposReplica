import React from "react";
import { NavLink } from "react-router-dom";

type NavlinkProps = {
  link: string;
};

const NavlinkComponent = ({ link }: NavlinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "mr-8 font-extrabold active-link" : "mr-8 font-extrabold"
      }
      key={link}
      to={link}
    >
      {link.toLocaleUpperCase()}
    </NavLink>
  );
};

export default NavlinkComponent;
