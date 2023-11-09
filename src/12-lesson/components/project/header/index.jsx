import React, { useContext } from "react";
import { UsersContext } from "../usersContext";

const Header = () => {
  const { data } = useContext(UsersContext);
  return (
    <header
      style={{
        height: "70px",
        backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{data.length}</h1>
    </header>
  );
};

export default Header;
