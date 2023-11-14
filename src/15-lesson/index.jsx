import React, { useState, useRef } from "react";

const UseRef = () => {
  // const [value, setValue] = useState("");
  const ref = useRef();
  // const delay = () => {
  //   let data = [];
  //   for (let i = 1; i <= 10000; i++) {
  //     data.push({ id: i, name: "webbrain" });
  //   }
  //   return data;
  // };
  // const send = () => {
  //   console.log(`{name: ${ref.current.value}}`);
  // };
  // const focus = () => {
  //   ref.current.style.border = "3px solid green";
  // };
  return (
    <div>
      <h1>UseRef</h1>
      {/* <input ref={ref} type="text" />
      <button onClick={focus}>focus</button> */}
      {/* <button onClick={send}>Send</button> */}
      {/* {delay().map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))} */}
      <div className="box">
        <h2>Title</h2>
      </div>
    </div>
  );
};

export default UseRef;
