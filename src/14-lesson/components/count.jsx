import React from "react";

const Count = React.memo(({ value, id }) => {
  console.log(`${id} count yurdi`);
  return <h2>{value}</h2>;
});
export default Count;
