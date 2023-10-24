import React from "react";

class Lesson3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bgColor: "white" };
  }
  render() {
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: this.state.bgColor,
        }}
      >
        <button
          onClick={() =>
            this.state.bgColor === "white"
              ? this.setState({ bgColor: "#333" })
              : this.setState({ bgColor: "white" })
          }
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Lesson3;
