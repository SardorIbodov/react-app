import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header className="h-16 bg-stone-900 text-white">
      <ul className="flex h-full justify-around items-center text-2xl cursor-pointer">
        <li className="hover:text-slate-400">
          <NavLink to="/home" exact activeClassName="text-cyan-600">
            Home
          </NavLink>
        </li>
        <li className="hover:text-slate-400">
          <NavLink to="/about" activeClassName="text-cyan-600">
            About
          </NavLink>
        </li>
        <li className="hover:text-slate-400">
          <NavLink to="/gallery" activeClassName="text-cyan-600">
            Gallery
          </NavLink>
        </li>
        <li className="hover:text-slate-400">
          <NavLink to="/login" activeClassName="text-cyan-600">
            Login
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("isLogged");
              history.push("/login");
            }}
            className="bg-slate-400 w-32 p-2 rounded-lg text-white mt-2 ml-2"
          >
            Logout
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
