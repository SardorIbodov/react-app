import React, { useState, useEffect, useRef } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();

  const emailLoginRef = useRef();
  const passwordLoginRef = useRef();

  const [house, setHouse] = useState({});

  const send = () => {
    fetch("http://localhost:8081/api/public/auth/register", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        email: emailRef.current.value,
        firstname: firstNameRef.current.value,
        lastname: lastNameRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((res) => res.json)
      .then((res) => console.log(res));
  };

  const login = () => {
    fetch("http://localhost:8081/api/public/auth/login", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        email: emailLoginRef.current.value,
        password: passwordLoginRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("login", res.authenticationToken));
  };

  const addHouse = () => {
    fetch("http://localhost:8081/api/v1/houses", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
      body: JSON.stringify({
        address: "string",
        attachments: [
          {
            imgPath:
              "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
          },
        ],
        categoryId: 1,
        city: "string",
        componentsDto: {
          additional: "string",
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },
        country: "Uzbekistan",
        description: "string",
        homeAmenitiesDto: {
          additional: "string",
          busStop: true,
          garden: true,
          market: true,
          park: true,
          parking: true,
          school: true,
          stadium: true,
          subway: true,
          superMarket: true,
        },
        houseDetails: {
          area: 600,
          bath: 1,
          beds: 2,
          garage: 1,
          room: 4,
          yearBuilt: 2020,
        },
        locations: {
          latitude: 0,
          longitude: 0,
        },
        name: "string",
        price: 400,
        region: "string",
        salePrice: 350,
        status: true,
        zipCode: "string",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const deleteHouse = () => {
    fetch("http://localhost:8081/api/v1/houses/44", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("login")}`,
      },
    }).then((res) => console.log(res));
  };

  useEffect(() => {
    fetch("http://localhost:8081/api/v1/houses/id/44")
      .then((res) => res.json())
      .then((res) => setHouse(res));
  }, []);

  return (
    <div>
      <h1>Fetch</h1>
      {/* <ul>
        {data?.map((user) => {
          return (
            <li key={user.id}>
              {user.id}. {user.name} - {user.email}
            </li>
          );
        })}
      </ul> */}
      {/* <div>
        {data.map((house) => {
          return (
            <div>
              <h1>{house.name}</h1>
              <img src={house.attachments[0].imgPath} alt="" />
            </div>
          );
        })}
      </div> */}
      {/* <input ref={emailRef} type="text" placeholder="email" />
      <input ref={firstNameRef} type="text" placeholder="firstname" />
      <input ref={lastNameRef} type="text" placeholder="lastname" />
      <input ref={passwordRef} type="text" placeholder="password" />
      <button onClick={send}>Register</button>
      <hr /> */}
      <h1>login</h1>
      <input ref={emailLoginRef} type="text" placeholder="email" />
      <input ref={passwordLoginRef} type="text" placeholder="password" />
      <button onClick={login}>Login</button>
      <hr />
      <br />
      <button onClick={addHouse}>Uy qo'shish</button>
      <h1>{house?.data?.country}</h1>
      <img src={house?.data?.attachments[0].imgPath} alt="" />
      <button onClick={deleteHouse}>Delete</button>
    </div>
  );
};

export default Fetch;
