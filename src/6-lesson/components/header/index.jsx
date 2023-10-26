import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Home</p>
        <p>About</p>
        <p>Gallery</p>
        <p>Contact</p>
        <p>Profile <span>{this.props.count}</span></p>
      </header>
    );
  }
}

export default Header;
