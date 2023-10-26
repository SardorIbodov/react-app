import React from "react";
import "./style.css";
import Box from "./components";

class Lesson7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "red",
      show: true,
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return { bgColor: "green", width: "100px" };
  // }

  // componentDidMount() {
  //   setTimeout(() => this.setState({ bgColor: "yellow" }), 1000);
  // }

  // shouldComponentUpdate() {
  // 	return false;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(`Bu box ${prevState.bgColor} rangda edi`);
  //   return 1;
  // }

  // componentDidUpdate() {
  //   console.log(`Endi box ${this.state.bgColor} rangda`);
  // }

  render() {
    return (
      <div>
        <h1>LifeCycles</h1>
        <div
          className="box"
          style={{
            backgroundColor: this.state.bgColor,
            width: this.state.width,
          }}
        >
          {this.state.show && <Box />}
          <button onClick={() => this.setState({ bgColor: "blue", show: false })}>
            Change color
          </button>
        </div>
      </div>
    );
  }
}

export default Lesson7;
