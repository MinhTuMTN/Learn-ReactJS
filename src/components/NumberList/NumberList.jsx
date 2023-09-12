import React from "react";
import "./NumberList.scss";

function NumberList(props) {
  let numbers = [];
  for (let i = 0; i < props.numbers; i++) numbers.push(i + 1);
  return (
    <div className="number-list">
      {numbers.map((value) => (
        <div className="number">{value}</div>
      ))}
    </div>
  );
}

export default NumberList;
