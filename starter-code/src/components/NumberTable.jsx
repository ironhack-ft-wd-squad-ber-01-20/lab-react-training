import React from "react";

const NumberTable = props => {
  console.log(props);
  const style = {
    backgroundColor: "red"
  };
  let table = [];
  for (let i = 1; i <= props.limit; i++) {
    if (i % 2 === 0) {
      table.push(
        <div key={i + "a"} style={style}>
          {i}
        </div>
      );
    } else {
      table.push(<div key={i + "a"}>{i}</div>);
    }
  }
  console.log(table);

  return table;
};

export default NumberTable;
