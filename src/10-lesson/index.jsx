import React, { useState, useEffect } from "react";

const UseEffect = () => {
  // const [count, setCount] = useState(1);
  // const [dataType, setDataType] = useState("users");
  // const [data, setData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleSize = () => {
    setWindowWidth(window.innerWidth);
  };
  //! 1. (Runs every time when render runs)
  // useEffect(() => {
  //   console.log("useEffect run");
  // });
  //! 2. (Runs only once)
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);
  //! 3. (Runs when values of dependencies array are changed)
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, [dataType]);

  // useEffect(() => {
  //   window.addEventListener("resize", handleSize);
	// 	return () => window.removeEventListener("resize", handleSize)
  // }, []);

  // console.log("render run");

  return (
    <div>
      <h1>UseEffect</h1>
      {/* <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <hr />
      <button onClick={() => setDataType("users")}>users</button>
      <button onClick={() => setDataType("comments")}>comments</button>
      <button onClick={() => setDataType("posts")}>posts</button>
      <h2>{dataType}</h2>
			{data.map(v => <pre key={v.id}>{JSON.stringify(v)}</pre>)} */}
      <h1>{windowWidth}</h1>
    </div>
  );
};

export default UseEffect;
