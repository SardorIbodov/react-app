import React from "react";

class Box extends React.Component {
  componentWillUnmount() {
    console.log("Yozuv hozir o'chadi!");
  }
  render() {
    return (
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
        earum.
      </div>
    );
  }
}

export default Box;
