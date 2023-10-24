import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          maxHeight: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid red",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <img
          src={this.props.data.src}
          alt="fruit"
          style={{
            width: "100%",
            height: "300px",
          }}
        />
        <p style={{ fontSize: "32px" }}>{this.props.data.description}</p>
      </div>
    );
  }
}

export default Card;
