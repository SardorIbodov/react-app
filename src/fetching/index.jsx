import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Fetching = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <h1>Fetching</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <p key={index}
					>
            {item.id} - {item.name}
          </p>
        ))
      ) : (
        <div>
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 48,
                }}
                spin
              />
            }
          />
        </div>
      )}
    </div>
  );
};

export default Fetching;
