import React from "react";
import { database } from "./mock";
import "./style.css";

let students = database;

class Lesson5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: students,
      sortType: "id",
      newUser: {
        name: "",
        year: "",
        status: "",
        isPaid: "",
        occupation: "",
      },
      edited: {},
      editedUser: null,
    };
  }
  render() {
    let { base, sortType, editedUser } = this.state;
    // Delete user
    const onDelete = (id) => {
      let newBase = base.filter((item) => item.id !== id);
      this.setState({ base: newBase });
    };

    // Sort type
    const sortByType = () => {
      switch (sortType) {
        case "id": {
          let newBase = base.sort((a, b) => a.id - b.id);
          this.setState({ base: newBase });
          break;
        }
        case "name": {
          let newBase = base.sort((a, b) => a.name.localeCompare(b.name));
          this.setState({ base: newBase });
          break;
        }
        case "year": {
          let newBase = base.sort((a, b) => a.year - b.year);
          this.setState({ base: newBase });
          break;
        }
      }
    };

    // Id generator
    function* idGenerator() {
      let id = students.length++;
      while (true) {
        yield ++id;
      }
    }
    let newId = idGenerator();

    // Add
    const addUser = () => {
      let newBase = [
        ...base,
        { id: newId.next().value, ...this.state.newUser },
      ];
      this.setState({
        base: newBase,
      });
    };

    // Save
    const save = () => {
      let newBase = base.map((item) => {
        if (item.id === editedUser) {
          return { ...item, ...this.state.edited };
        } else return item;
      });
      this.setState({ base: newBase });
    };

    return (
      <div className="wrapper">
        <h1>CRUD in React</h1>
        {/* Sort  */}
        <div>
          <select
            onChange={(e) => {
              this.setState({ sortType: e.target.value });
            }}
          >
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="year">Year</option>
          </select>
          <button onClick={sortByType}>Saralash</button>
        </div>
        {/* Add  */}
        <div>
          <input
            value={this.state.newUser.name}
            type="text"
            placeholder="Name"
            onChange={(e) =>
              this.setState({
                newUser: { ...this.state.newUser, name: e.target.value },
              })
            }
          />
          <input
            value={this.state.newUser.year}
            type="number"
            placeholder="Year"
            onChange={(e) =>
              this.setState({
                newUser: { ...this.state.newUser, year: e.target.value },
              })
            }
          />
          <input
            value={this.state.newUser.status}
            type="text"
            placeholder="Status"
            onChange={(e) =>
              this.setState({
                newUser: { ...this.state.newUser, status: e.target.value },
              })
            }
          />
          <input
            value={this.state.newUser.isPaid}
            type="text"
            placeholder="IsPaid"
            onChange={(e) =>
              this.setState({
                newUser: { ...this.state.newUser, isPaid: e.target.value },
              })
            }
          />
          <input
            value={this.state.newUser.occupation}
            type="text"
            placeholder="Occupation"
            onChange={(e) =>
              this.setState({
                newUser: { ...this.state.newUser, occupation: e.target.value },
              })
            }
          />
          <button
            onClick={() => {
              if (
                this.state.newUser.name &&
                this.state.newUser.year &&
                this.state.newUser.status &&
                this.state.newUser.isPaid &&
                this.state.newUser.occupation
              ) {
                addUser();
                this.setState({
                  newUser: {
                    name: "",
                    year: "",
                    status: "",
                    isPaid: "",
                    occupation: "",
                  },
                });
              } else alert("Ma'lumotlarni to'ldiring!");
            }}
          >
            Qo'shish
          </button>
        </div>
        {/* Table  */}
        <table border={1}>
          <thead>
            <tr>
              {Object.keys(base[0]).map((key) => (
                <th>{key.toUpperCase()}</th>
              ))}
              <th>O'chirish</th>
              <th>O'zgartirish</th>
            </tr>
          </thead>
          <tbody>
            {base.map((user) => {
              return (
                <tr>
                  {Object.keys(user).map((key, index) => {
                    if (key !== "id") {
                      if (user.id === editedUser) {
                        return (
                          <td>
                            <input
                              defaultValue={user[key]}
                              name={key}
                              onChange={(e) =>
                                this.setState({
                                  edited: {
                                    ...this.state.edited,
                                    [key]: e.target.value,
                                  },
                                })
                              }
                            />
                          </td>
                        );
                      } else return <td>{user[key]}</td>;
                    } else return <td>{user[key]}</td>;
                  })}
                  <td>
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                  </td>
                  {user.id === editedUser ? (
                    <td>
                      <button
                        onClick={() => {
                          save();
                          this.setState({ editedUser: null });
                        }}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => this.setState({ editedUser: null })}
                      >
                        Cancel
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        onClick={() => {
                          this.setState({ editedUser: user.id });
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Lesson5;
