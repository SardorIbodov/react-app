import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Users from "./components/users";
import Login from "./components/login";
import About from "./components/about";
import Header from "./components/header";
import User from "./components/user";

const RouterDOM6 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users">
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <button
        onClick={() => {
          localStorage.removeItem("isLogged");
          window.location.reload();
        }}
        className="bg-slate-400 w-32 p-2 rounded-lg text-white mt-2 ml-2"
      >
        LogOut
      </button>
    </BrowserRouter>
  );
};

export default RouterDOM6;
