import React, { useId } from "react";

const Form = () => {
  const id = useId();
  return (
    <div>
      <form action="">
        <label htmlFor={id}>Name</label>
        <input type="text" id={id} />
      </form>
    </div>
  );
};

export default Form;
