import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ForHistory = () => {
  let history = useHistory();
  return (
    <div>
      <button
        onClick={() => history.goBack(-1)}
        className="bg-slate-400 w-32 p-2 rounded-lg text-white mt-2 ml-2"
      >
        Go back
      </button>
      <button
        onClick={() => history.goForward(-1)}
        className="bg-slate-400 w-32 p-2 rounded-lg text-white mt-2 ml-2"
      >
        Go forward
      </button>
      <button
        onClick={() => history.push("/about")}
        className="bg-slate-400 w-32 p-2 rounded-lg text-white mt-2 ml-2"
      >
        Go About
      </button>
    </div>
  );
};

export default ForHistory;
