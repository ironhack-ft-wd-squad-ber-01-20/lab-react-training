import React, { Component } from "react";

class BoxColor extends Component {
  render() {
    let { r, g, b, color } = this.props;

    return (
      <div
        className="BoxColor box"
        style={{
          backgroundColor: `rgb(${r},${g},${b})`,
          color: color,
        }}
      >
        rgb({r},{g},{b})<br />
        {/* to do: convert the rgb to hex in code  */}
      </div>
    );
  }
}

export default BoxColor;
