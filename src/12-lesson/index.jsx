import React from "react";
// import Parent from "./components/parent";
import Header from "./components/project/header";
import Body from "./components/project/body";
import UsersContextProvider from "./components/project/usersContext";


const UseContext = () => {
  return (
    <UsersContextProvider>
      {/* <Parent /> */}
      <Header />
      <Body />
    </UsersContextProvider>
  );
};

export default UseContext;
