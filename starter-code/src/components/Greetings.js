import React, { Component } from "react";
import "./Greetings.css";

class Greetings extends Component {
  checkLanguageAndGreet = (lang) => {
    if (lang === "de") {
      return "Hallo";
    }
    if (lang === "fr") {
      return "Bonjour";
    }
    if (lang === "en") {
      return "Hello";
    }
    if (lang === "es") {
      return "Hola";
    }
  };

  render() {
    return [
      <div className="GreetingsPanel" key={this.props.children}>
        <p>
          {this.checkLanguageAndGreet(this.props.lang) +
            " " +
            this.props.children}
        </p>
      </div>,
    ];
  }
}

export default Greetings;
