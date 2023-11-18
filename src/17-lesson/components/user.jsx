import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const User = () => {
  const param = useParams();
  const requestNumber = param.id.slice(
    param.id.indexOf(":") + 1,
    param.id.length + 1
  );
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${requestNumber}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);
  return (
    <ul>
      {Object.values(user).map((item) => {
        return (
          typeof item !== "object" &&
          typeof item !== "function" && <li key={item}>{item}</li>
        );
      })}
    </ul>
  );
};

export default User;
