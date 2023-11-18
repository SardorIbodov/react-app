import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  return (
    <>
      {localStorage.getItem("isLogged") ? (
        <div>
          {users.map((user) => (
            <h2 key={user.id}>
              {user.id}. {user.name} - {user.email} -{" "}
              <button
                onClick={() => navigate(`/users/:${user.id}`)}
                className="bg-slate-400 w-32 p-2 rounded-lg text-white mt-2 ml-2"
              >
                More...
              </button>
            </h2>
          ))}
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Users;
