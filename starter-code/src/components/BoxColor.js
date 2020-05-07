import React, { Component } from "react";
import "./BoxColor.css";

class BoxColor extends Component {
  componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  rgbToHex = (r, g, b) => {
    return (
      "#" +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    );
  };

  render() {
    return [
      <div
        className="BoxColorPanel"
        key=""
        style={{
          background:
            "rgb(" +
            this.props.r +
            "," +
            this.props.g +
            "," +
            this.props.b +
            ")",
        }}
      >
        <p>
          rgb({this.props.r},{this.props.g},{this.props.b})
        </p>
        <p>{this.rgbToHex(this.props.r, this.props.g, this.props.b)}</p>
      </div>,
    ];
  }
}

export default BoxColor;
