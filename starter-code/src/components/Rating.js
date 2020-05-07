import React, { Component } from "react";
import "./Rating.css";

class Rating extends Component {
  ratingFormatter = (number) => {
    let ratingStr = "-----";
    let ratingArray = ratingStr.split("");

    for (let i = 0; i < Math.round(number); i++) {
      ratingArray[i] = "X";
    }

    return ratingArray.join("");
  };

  render() {
    return [
      <div className="RatingPanel" key="">
        <p>{this.ratingFormatter(this.props.children)}</p>
      </div>,
    ];
  }
}

export default Rating;
