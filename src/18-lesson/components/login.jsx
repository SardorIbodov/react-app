import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <form action="">
        <input type="email" required className="border-2" />
        <input type="password" required className="border-2" />
        <button
          type="submit"
          onClick={() => {
            localStorage.setItem("isLogged", true);
            navigate("/users");
            window.location.reload();
          }}
          className="bg-slate-400 w-32 p-2 rounded-lg text-white mt-2 ml-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
