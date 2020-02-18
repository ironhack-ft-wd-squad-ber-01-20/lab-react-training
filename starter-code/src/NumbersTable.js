import React from "react";
const NumbersTable = props => {
  const digits = [];
  for (let i = 1; i <= props.limit; i++) {
    digits.push(i);
  }
  const numbers = digits.map(num => {
    if (num % 2 === 0) {
      return <p className="evennumber"> {num} </p>;
    } else {
      return <p className="number"> {num} </p>;
    }
  });
  return <div className="numberGrid">{numbers}</div>;
};

export default NumbersTable;
