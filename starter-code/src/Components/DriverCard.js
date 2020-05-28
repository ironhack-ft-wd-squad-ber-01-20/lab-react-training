import React from 'react';
// import Rating from './Components/Rating';
import './style.css';


class DriverCard extends React.Component {
    render() {
        // const stars = Math.round(this.props.rating.toString())
      return (
        <div className="profile">
            <img src={this.props.img} style={{ width: '100px' }} alt=""/>
            <div className="id">
              <div>{this.props.name}</div>
              <div>{this.props.car.model} {this.props.car.licensePlate}</div>
              <div>{this.props.rating.toString()}</div>
              {/* <Rating>{this.props.rating.toString()}</Rating> */}
            </div>
        </div>
      );
    }
  }

  
export default DriverCard;