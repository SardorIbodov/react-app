import React, { useState, useEffect } from "react";

const Storages = () => {
  // useEffect(() => {
  //   localStorage.setItem("name", "webbrain");
  // }, []);
  // const [name, setName] = useState(localStorage.getItem("name"));
  // const [inpValue, setInpValue] = useState("");
  // const deleteName = () => {
  //   localStorage.removeItem("name");
  //   setName(localStorage.getItem("name"));
  // };

  // useEffect(() => {
  //   sessionStorage.setItem("name", "webbrain");
  // }, []);
  // const [name, setName] = useState(sessionStorage.getItem("name"));
  // const [inpValue, setInpValue] = useState("");
  // const deleteName = () => {
  //   sessionStorage.removeItem("name");
  //   setName(sessionStorage.getItem("name"));
  // };

  // document.cookie = `name=webbrain;expires=${new Date(
  //   2023,
  //   12,
  //   1
  // ).toUTCString()}`;

  // console.log(document.cookie);
  return (
    // <div>
    //   <h1>Local Storage</h1>
    //   <p>{name}</p>
    //   <input
    //     type="text"
    //     placeholder="Type something"
    //     onChange={({ target: { value } }) => setInpValue(value)}
    //   />
    //   <button
    //     onClick={() => {
    //       localStorage.setItem("name", `${inpValue}`);
    //       setName(inpValue);
    //     }}
    //   >
    //     SetName
    //   </button>
    //   <button onClick={() => deleteName()}>Delete</button>
    // </div>
    <div>
      {/* <h1>Local Storage</h1>
      <p>{name}</p>
      <input
        type="text"
        placeholder="Type something"
        onChange={({ target: { value } }) => setInpValue(value)}
      />
      <button
        onClick={() => {
          sessionStorage.setItem("name", `${inpValue}`);
          setName(inpValue);
        }}
      >
        SetName
      </button>
      <button onClick={() => deleteName()}>Delete</button> */}
    </div>
  );
};

export default Storages;
