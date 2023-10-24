import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    console.log(this.props.children);
    const links = this.props.links;
    return (
      <header>
        <ul>
          {links.map((value) => (
            <li>
              <a href="#">{value}</a>
            </li>
          ))}
        </ul>
      </header>
    );
  }
}

export default Header;
