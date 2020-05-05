import React from "react";

const idCard = props =>{
    let date = props.birth.toDateString();
    return (
        <div>
            <div className ="data">
                <p>Last Name: {props.lastName}</p>
                <p>First Name: {props.firstName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Birthday: {date}</p>
                <img src ={props.picture}/>
            </div>
        </div>

    );
};

export default idCard;