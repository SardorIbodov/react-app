import React, { useCallback, useMemo } from "react";

const IsFive = React.memo(
  ({ value }) => {
    const resultFunc = useCallback(
      (param) => {
        let i = 0;
        while (i < 400000000) i++;
        return value === 5 ? `Qiymat beshga teng ${param}` : "Teng emas";
      },
      [value]
    );
    // const result = useMemo(() => {
    //   let i = 0;
    //   while (i < 400000000) i++;
    //   return value === 5 ? "Qiymat beshga teng" : "Teng emas";
    // }, [value]);
    // const getResult = () => {
    //   let i = 0;
    //   while (i < 400000000) i++;
    //   return value === 5 ? "Qiymat beshga teng" : "Teng emas";
    // };
    return <div>{resultFunc("web")}</div>;
  },
  (prevprops, nextProps) => {
    return nextProps.value === 5 || prevprops.value === 5 ? false : true;
  }
);

export default IsFive;
