import React from "react";
import "./body.css";

class Body extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div>
        <ul>
          {messages.map((v, i) => (
            <li key={i}>
              {v} <b>x</b>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Body;
