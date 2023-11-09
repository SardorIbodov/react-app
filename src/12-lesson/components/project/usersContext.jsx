import React, { createContext, useState } from "react";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Iqboljon Yuldashev",
    },
    {
      id: 2,
      name: "Asilbek Tolipov",
    },
    {
      id: 3,
      name: "Najmiddin Nazarov",
    },
    {
      id: 4,
      name: "Mominov Abdulloh",
    },
    {
      id: 5,
      name: "Sardor Tursunboyev",
    },
    {
      id: 6,
      name: "Hudoyberdieva Mohichehra",
    },
    {
      id: 7,
      name: "Muhammad Nurmirzayev",
    },
    {
      id: 8,
      name: "Shukurov Shohruh",
    },
  ]);

  const deleteUser = (id) => {
    let newData = data.filter((user) => user.id !== id);
    setData(newData);
  };

  return (
    <UsersContext.Provider value={{ data, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
