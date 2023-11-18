import React, { useState, useEffect } from "react";
import {
  useHistory,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const isLogged = () => localStorage.getItem("isLogged");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  return (
    <div>
      {isLogged() ? (
        <div>
          <h1>Users</h1>
          <ul>
            {users.map((user) => (
              <li className="mt-2.5" key={user.id}>
                {user.id}. {user.name}{" "}
                <button
                  onClick={() => history.push(`/user/:${user.id}`)}
                  className="bg-slate-400 w-32 p-2 rounded-lg text-white"
                >
                  More...
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;
