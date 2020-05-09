import React, { Component } from "react";

class IdCard extends Component {
  render() {
    const { birth } = this.props;
    return (
      <div className="id-card">
        <img src={this.props.picture} alt={this.props.lastName}></img>
        <div className="id-info">
          <div>
            <strong>First name: </strong>
            {this.props.firstName}
          </div>
          <div>
            <strong>Last name:</strong>
            {this.props.lastName}
          </div>
          <div>
            <strong>Gender: </strong>
            {this.props.gender}
          </div>
          <div>
            <strong>Height: </strong>
            {this.props.height}
          </div>
          {/* <div>{this.props.birth}</div>   CAN'T DO LIKE THIS BECAUSE OF ERROR 'OBJECTS ARE NOT VALID AS REACT CHILD*/}
          <div>
            <strong>Birth date: </strong>
            {birth.toDateString()}
          </div>
        </div>
      </div>
    );
  }
}

export default IdCard;
