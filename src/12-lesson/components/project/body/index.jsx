import React, { useContext } from "react";
import { UsersContext } from "../usersContext";

const Body = () => {
  const { data, deleteUser } = useContext(UsersContext);

  return (
    <ul>
      {data?.map((user) => {
        return (
          <li key={user.id}>
            {user.id}. {user.name} -{" "}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Body;
