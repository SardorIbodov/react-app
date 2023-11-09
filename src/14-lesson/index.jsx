import React, { useState } from "react";
import Header from "./components/header";
import Body from "./components/body";
// import Count from "./components/count";
// import IsFive from "./components/isFive";

const Optimization = () => {
  // const [count1, setCount1] = useState(1);
  // const [count2, setCount2] = useState(1);
  const [inpValue, setInputValue] = useState("");
  const [users, setUsers] = useState([
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
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>Optimization</h1>
      <Header />
      <Body handleInput={{ inpValue, setInputValue, users, deleteUser }} />
      {/* <br />
      <div>
        <button onClick={() => setCount1(count1 + 1)}>Plus</button>
        <Count value={count1} id={1} />
      </div>
      <hr />
      <br />
      <div>
        <button onClick={() => setCount2(count2 + 1)}>Plus</button>
        <Count value={count2} id={2} />
        <IsFive value={count2} />
      </div> */}
    </div>
  );
};

export default Optimization;
