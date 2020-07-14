import React from 'react'
import './IdCard.css'

const IdCard = (props) => {
    
      return(
        <div>
        <div className="idcard">
        
            <p><strong>First name:</strong> {props.firstName}</p>
            <p><strong>Last name:</strong> {props.lastName}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Height:</strong> {props.height}</p>
            <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
            <img src={props.picture} alt={props.firstName} />
        
        </div>
        </div>
        
        
    )
 
}

export default IdCard;