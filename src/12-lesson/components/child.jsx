import React from "react";
import Grandchild from "./grandchild";

const Child = () => {
  return (
    <div>
      <h2>Child</h2>
      <hr />
      <Grandchild />
    </div>
  );
};

export default Child;
