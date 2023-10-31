import React, { useState } from "react";
import Header from "./header";
import Body from "./body";

const FunctionalComponents = (props) => {
  // const [count2, setCount2] = useState(2);
  // const [inpValue, setInpValue] = useState("");
  const [users, setUsers] = useState([
    "Azimov Asadbek",
    "Abdulhakimov Hojiakbar",
    "Saminjonov Jamshid",
    "Abdug'ofurov Bilol",
    "Murodullayev Muhammadjon",
    "Akbarov Hojiakbar",
  ]);

	const deleteUser = (v) => {
		let newUsers = users.filter((user) => user !== v);
		setUsers(newUsers);
	}

  return (
    <div>
      <h1>Functional Components</h1>
      {/* Counter example   */}
      {/* <h2>{count2}</h2> */}
      {/* <button onClick={() => setCount2(count2 + 1)}>Plus</button>
      <button onClick={() => setCount2(count2 - 1)}>Minus</button> */}
      {/* Form example   */}
      {/* <input
        type="text"
        placeholder="Type something"
        onChange={(e) => {
          setInpValue(e.target.value);
        }}
      />
      <p>{inpValue}</p> */}
      <Header count={users.length}/>
      <Body users={users} deleteUser={deleteUser}/>
    </div>
  );
};

export default FunctionalComponents;
