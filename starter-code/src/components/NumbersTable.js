import React, { Component } from "react";

class NumbersTable extends Component {
  state = {
    background: "",
  };

  render() {
    let numArr = [];
    let background = this.state.background;

    for (let i = 1; i <= this.props.limit; i++) {
      numArr.push(
        <li style={{ backgroundColor: background }} key={i}>
          {i}
        </li>
      );
      if (i % 2 === 0) {
        background = "white";
      } else background = "red";
    }

    return (
      <div>
        <ul className="number-container">{numArr} </ul>
      </div>
    );
  }
}

export default NumbersTable;
