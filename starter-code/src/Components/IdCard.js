import React, { Component, Fragment } from 'react'


const IdCard = (props) => {
    return (
        <Fragment>
            <strong type="text">First name: </strong> <p>{props.firstName}</p>
            <strong type="text">Last name: </strong> <p>{props.lastName}</p>
            <strong type="text">Gender: </strong> <p>{props.gender}</p>
            <strong type="number">Height </strong> <p>{props.height}</p>
            <strong type="date">Birth </strong> <p>{props.birth.toLocaleDateString()}</p>
            <img src={props.picture} />   
        </Fragment>
    )
}


export default IdCard;