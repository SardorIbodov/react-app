import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div>
      <form action="">
        <input type="email" required className="border-2" />
        <input type="password" required className="border-2" />
        <button
          type="submit"
          onClick={() => {
            localStorage.setItem("isLogged", true);
            history.push("/home");
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
