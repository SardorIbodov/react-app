import React from "react";
import Header from "./components/header";
import Body from "./components/body";

class Lesson6 extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      messages: [
        "Assalomu alaykum",
        "Yaxshimisiz?",
        "Darslar ertadan boshlanadi",
        "Soat 15:00 da",
        "Sizni kutamiz",
        "Sizni kutamiz",
      ],
    };
  }
	render() {
		return <div>
			<Header count={this.state.messages.length}/>
			<Body messages={this.state.messages}/>
		</div>
	}
}

export default Lesson6;