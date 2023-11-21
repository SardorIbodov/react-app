import React, { useState } from "react";
import { flushSync } from "react-dom";

// Batching => Guruhlash

const Batching = () => {
  const [name, setName] = useState("web");
  const [age, setAge] = useState(20);
  console.log("render");
  return (
    <div>
      <h1>Batching</h1>
      <button>Change</button>
    </div>
  );
};

export default Batching;
