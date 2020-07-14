import React from 'react'; 

function Random(props) {
    return (
        <div className="container">
        <p>Random value between {props.min} and {props.max}.</p> 
        </div>
    ); 
};


export default Random; 
