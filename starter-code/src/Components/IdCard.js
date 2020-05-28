import React from 'react';
import './style.css';


// class IdCard extends React.Component {
//     render() {
//       return (
//         <div className="profile">
//             <img src={this.props.picture} style={{ width: '100px' }} alt=""/>
//             <div className="id">
//               <div>Last Name: {this.props.lastName}</div>
//               <div>First Name: {this.props.firstName}</div>
//               <div>Gender: {this.props.gender}</div>
//               <div>Height: {this.props.height}</div>
//               <div>Birthday: {this.props.birth.toLocaleDateString()}</div>
//             </div>
//         </div>
//       );
//     }
//   }

function IdCard (props) {
      return (
        <div className="profile">
            <img src={props.picture} style={{ width: '100px' }} alt=""/>
            <div className="id">
              <div>Last Name: {props.lastName}</div>
              <div>First Name: {props.firstName}</div>
              <div>Gender: {props.gender}</div>
              <div>Height: {props.height}</div>
              <div>Birthday: {props.birth.toLocaleDateString()}</div>
            </div>
        </div>
      );
    }
  
  
export default IdCard;