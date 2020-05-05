import React  from "react";


const IdCard = (props) => {
    return (
        <div style = {{display:"flex", height: "200px"}}>
         <img src={props.picture}/>
        <div>
            <p>
                Last Name: {props.lastName}
            </p>
            <p>
                First Name: {props.firstName}
            </p>
            <p>
                Gernder: {props.gender}
            </p>
            <p>
               Heihgt: {props.height}
            </p>
            <p>
                Birth: {props.birth.toString()}
            </p>
            </div>
        </div>
    )

}
   
export default IdCard;
