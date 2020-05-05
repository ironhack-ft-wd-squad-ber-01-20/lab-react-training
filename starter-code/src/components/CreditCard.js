import React from "react";


const Creditcard = (props) =>{
    const Expires = {
        expirationMonth: Number,
        expirationYear: Number

    }
    const cardstyle ={
        backgroundColor: `${props.bgColor}`,
       color: `${props.color}`
    }
    return(
        <div className ="creditcard" style={cardstyle}>
        <div>
        <p>
           {props.type}
         </p>
         </div>
         <div>
         <p>
         •••• •••• •••• {props.number.slice(12)}
         </p>
         </div>
         <div className="expiration">
         <p>
           Expires:{props.expirationMonth.toString().length < 2? "0" + props.expirationMonth: props.expirationMonth}/{props.expirationYear.toString().slice(2)}
         </p> 
         
         <p >
             bank: {props.bank}
         </p>
        </div>
        
         <p>
         {props.owner}
         </p>
         </div>
    )
}

export default Creditcard;