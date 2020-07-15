import React from 'react'

function IdCard(props) {
    const date=props.birth; 
    const formattedDate=Intl.DateTimeFormat("en-US", {
        year: "numeric", 
        month:"short",
        day:"2-digit", 
    }).format(date); 
    return (
        <div className="container">
            <img src={props.picture} alt="pic"/>
            <div className="ptags">
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.heigth}</p>
                <p>Birth: {formattedDate}</p>
            </div>   
        </div>
    ); 
}

export default IdCard; 