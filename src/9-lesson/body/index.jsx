import React from "react";

const Body = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <p key={u}>
          {u} <button onClick={() => props.deleteUser(u)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Body;
