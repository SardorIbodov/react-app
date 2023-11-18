import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({});
  let { id } = useParams();
  id = id.slice(1, id.length + 1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);
  return (
    <div>
      {Object.values(user).map(
        (value) =>
          typeof value !== "object" &&
          typeof value !== "function" && <h2>{value}</h2>
      )}
    </div>
  );
};

export default User;
