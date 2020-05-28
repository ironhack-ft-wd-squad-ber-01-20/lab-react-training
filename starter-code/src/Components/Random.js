import React from 'react';

class Random extends React.Component {
   
    render() {
      return (
        <div>
            <p>Randome value between {this.props.min} and {this.props.max} => {this.props.min + Math.floor(Math.random() * (this.props.max - this.props.min))}</p>
            
        </div>
      );
    }
  } 

export default Random;