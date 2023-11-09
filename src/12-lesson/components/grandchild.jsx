import React, { useContext } from "react";
import { RegistrateContext } from "./parent";

const Grandchild = () => {
  const { isRegistrated, setIsRegistrated } = useContext(RegistrateContext);
  return (
    <div>
      <h3>Grandchild</h3>
      <button onClick={() => setIsRegistrated(!isRegistrated)}>{isRegistrated ? "Logout" : "Registrate"}</button>
    </div>
  );
};

export default Grandchild;
