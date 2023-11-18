import React from "react";
import { NavLink } from "react-router-dom";
import navlinks from "../navlinks";

const Header = () => {
  return (
    <header className="h-16 bg-slate-900 flex justify-around items-center text-2xl">
      {navlinks.map((navlink) => {
        return (
          !navlink.isPrivate && (
            <NavLink
              key={navlink.id}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "text-white"
              }
              to={navlink.path}
            >
              {navlink.title}
            </NavLink>
          )
        );
      })}
      {localStorage.getItem("isLogged") && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-white"
          }
          to="/users"
        >
          Users
        </NavLink>
      )}
    </header>
  );
};

export default Header;
