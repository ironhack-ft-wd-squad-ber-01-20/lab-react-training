// import React, { useContext } from "react";
import React from "react";

const IdCard = (props) => {
    return (
       <div className='App'>
           <div className='IdCard box'>
               <img src={props.picture} alt='userpicture'></img>
               <div className='rigth'>
                    <strong>First Name:</strong>{props.firstName}<br></br>
                    <strong>Last Name:</strong>{props.lastName}<br></br>
                    <strong>Gender:</strong>{props.gender}<br></br>
                    <strong>Height:</strong>{props.height}<br></br>
                    <strong>Birth:</strong>{props.birth}<br></br>
                </div>
           </div>
       </div>
    )
}

export default IdCard;