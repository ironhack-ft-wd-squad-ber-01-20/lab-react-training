import React from "react";

import React from "react";

const NumbersTable = props => {
  let numbers = [];

  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i);
  }

  const nums = numbers.map(num => {
    if (num % 2 === 0) {
      return (
        <li key={num} className="red">
          {num}
        </li>
      );
    } else {
      return <li key={num}>{num}</li>;
    }
  });

  return <ul className="numbersTable">{nums}</ul>;
};

export default NumbersTable;