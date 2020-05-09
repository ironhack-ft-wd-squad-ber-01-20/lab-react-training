import React, { Component } from "react";
import "./Greetings.css";

class Greetings extends Component {
  render() {
    let greeting = "";
    switch (this.props.lang) {
      case "en":
        greeting = "Hello,";
        break;
      case "de":
        greeting = "Hallo,";
        break;
      case "fr":
        greeting = "Bonjour,";
        break;
      default:
        greeting = "Hola,";
        break;
    }
    return (
      <div className="greeting-card">
        <p>
          {greeting} {this.props.children}!
        </p>
      </div>
    );
  }
}

export default Greetings;
