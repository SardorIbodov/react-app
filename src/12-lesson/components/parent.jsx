import React, { useState, createContext } from "react";
import Child from "./child";

export const RegistrateContext = createContext();

const Parent = () => {
  const [isRegistrated, setIsRegistrated] = useState(false);
  return (
    <RegistrateContext.Provider value={{isRegistrated, setIsRegistrated}}>
      <h1>Parent</h1>
      <div>{isRegistrated ? "Ro'yxatdan o'tgan" : "Ro'yxatdan o'tmagan"}</div>
			<hr />
			<Child/>
    </RegistrateContext.Provider>
  );
};

export default Parent;
