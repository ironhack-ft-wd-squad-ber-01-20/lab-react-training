import React, { Component } from "react";
// import RandomNumberGenerator from "./RandomNumberGenerator";

/*
class Random extends Component {
    constructor(props) {
        super();
        this.state= {
            number: props.min
        };
    }

randomNumber() {
    this.state({
        number: this.state +  Math.floor(Math.random() * {this.props.max}) + {this.state.min}
    }
    )
}

    render() {
      return (
        <div>
          Math.floor(Math.random() * {this.props.max}) + {this.props.min}
        </div>
      );
    }
  }
  


*/




class Random extends Component {

  render() {
    return (
      <div>
        { Math.floor(Math.random() * this.props.max) + this.props.min }
      </div>
    );
  }
}



/*
const Random = (props) => {
   
    return (<div className="box"> { Math.floor(Math.random() * {props.max}) + {props.min} } </div> );
  
}
*/
export default Random;
