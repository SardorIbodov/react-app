import React from "react";
import base from "./mock";
import Card from "./card";
import { users } from "./mock";

class Lesson4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // inputValue: "",
      // language: "uz",
      // html: false,
      // css: false,
      // js: false,
      // firstName: "",
      // surname: "",
    };
  }
  render() {
    const handleLanguage = (lang) => {
      switch (lang) {
        case "uz":
          return "o'zbek";
        case "ru":
          return "rus";
        case "en":
          return "ingliz";
      }
    };

    const multiChange = (property, value) => {
      this.setState({ [property]: value });
    };
    return (
      <div className="wrapper">
        <h1 className="title">Fruit</h1>
        <div
          className="content"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          {base.map((value) => {
            return <Card data={value} />;
          })}
        </div>
      </div>

      // <div style={{ overflow: "auto" }}>
      //   {/* Handling input value */}
      //   {/* <input type="text" onChange={(e) => this.setState({inputValue: e.target.value})} />
      //   <p>{this.state.inputValue}</p> */}

      //   {/* Handling select  */}
      //   {/* <select onChange={(e) => this.setState({language: e.target.value})}>
      //     <option value="uz">O'zbek</option>
      //     <option value="ru">Rus</option>
      //     <option value="en">Ingliz</option>
      //   </select>
      //   <p>
      //     Foydalanuvchi {handleLanguage(this.state.language)} tilini tanladi
      //   </p> */}

      //   {/* Handling checkbox */}
      //   {/* <p>Siz qaysilarini bilasiz?</p>
      //   <label style={{ display: "block" }}>
      //     HTML{" "}
      //     <input
      //       type="checkbox"
      //       onChange={(e) => this.setState({ html: e.target.checked })}
      //     />
      //   </label>
      //   <label style={{ display: "block" }}>
      //     CSS{" "}
      //     <input
      //       type="checkbox"
      //       onChange={(e) => this.setState({ css: e.target.checked })}
      //     />
      //   </label>
      //   <label style={{ display: "block" }}>
      //     JS{" "}
      //     <input
      //       type="checkbox"
      //       onChange={(e) => this.setState({ js: e.target.checked })}
      //     />
      //   </label>
      //   <p>
      //     Foydalanuvchi {this.state.html && "HTML"} {this.state.css && "CSS"}{" "}
      //     {this.state.js && "JS"}{" "}
      //     {this.state.html || this.state.css || this.state.js
      //       ? "biladi"
      //       : "hech nimani bilmaydi"}
      //   </p> */}
      //   {/* <table border={1} style={{ width: "650px" }}>
      //     <thead>
      //       <tr>
      //         <th
      //           style={{
      //             position: "sticky",
      //             top: 0,
      //             left: 0,
      //             backgroundColor: "red",
      //           }}
      //         >
      //           Id
      //         </th>
      //         <th>Name</th>
      //         <th>Age</th>
      //         <th>Occupation</th>
      //         <th>Country</th>
      //         <th
      //           style={{
      //             position: "sticky",
      //             top: 0,
      //             right: 0,
      //             backgroundColor: "red",
      //           }}
      //         >
      //           Status
      //         </th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {users.map((user) => {
      //         return (
      //           <tr>
      //             {Object.values(user).map((v, i) => {
      //               if (i === 0) {
      //                 return (
      //                   <td
      //                     style={{
      //                       position: "sticky",
      //                       top: 0,
      //                       left: 0,
      //                       backgroundColor: "red",
      //                     }}
      //                   >
      //                     {v}
      //                   </td>
      //                 );
      //               } else if (i === Object.values(user).length - 1) {
      //                 return (
      //                   <td
      //                     style={{
      //                       position: "sticky",
      //                       top: 0,
      //                       right: 0,
      //                       backgroundColor: "red",
      //                     }}
      //                   >
      //                     {v}
      //                   </td>
      //                 );
      //               } else return <td>{v}</td>;
      //             })}
      //           </tr>
      //         );
      //       })}
      //     </tbody>
      //   </table> */}

      //   {/* <input
      //     type="text"
      //     placeholder="Type your firstName"
      //     name="firstName"
      //     onChange={(e) => multiChange(e.target.name, e.target.value)}
      //   />
      //   <input
      //     type="text"
      //     placeholder="Type your surname"
      //     name="surname"
      //     onChange={(e) => multiChange(e.target.name, e.target.value)}
      //   />
      //   <p>
      //     Ismi: {this.state.firstName}, Familiyasi: {this.state.surname}
      //   </p> */}
      // </div>
    );
  }
}

export default Lesson4;
