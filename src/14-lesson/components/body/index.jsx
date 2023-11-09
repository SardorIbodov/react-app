import React from "react";
import { Input, Text } from "./style";

const Body = ({
  handleInput: { inpValue, setInputValue, users, deleteUser },
}) => {
  console.log("body");
  return (
    <div>
      <Input onChange={(e) => setInputValue(e.target.value)} />
      <Text>{inpValue}</Text>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.id}. {u.name}{" "}
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
