import React, { useState, useMemo, useTransition } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const UseTransition = () => {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setValue(e.target.value);
    startTransition(() => {
      let list = [];
      for (let i = 1; i <= 20000; i++) {
        list.push(e.target.value);
      }
      setArray(list);
    });
  };

  return (
    <div>
      <h1>UseTransition</h1>
      <input
        type="text"
        placeholder="Type something"
        value={value}
        onChange={handleChange}
      />
      {isPending ? (
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
      ) : (
        array?.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  );
};

export default UseTransition;
