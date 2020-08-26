import React, { Component } from "react";

export default class IdCard extends Component {
    render(){
        return (
            <div className='IdCard box'>
                <img src={this.props.picture} alt='userpicture'></img>
                <div className='rigth'>
                     <strong>First Name:</strong>{this.props.firstName}<br></br>
                     <strong>Last Name:</strong>{this.props.lastName}<br></br>
                     <strong>Gender:</strong>{this.props.gender}<br></br>
                     <strong>Height:</strong>{this.props.height}<br></br>
                     <strong>Birth:</strong>{this.props.birth}<br></br>
                 </div>
            </div>
     )
    }
}