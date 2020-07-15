import React from "react";

const Greetings = (props) => {
    //let lang = props.lang;
    if (props.lang === 'de'){
    return (
       <div className='box'>
           <p>Hallo {props.children}</p>
       </div>
    )} else if (props.lang === 'fr'){
        return (
            <div className='box'>
                <p>Bonjour {props.children}</p>
            </div>
         )
    } else if (props.lang === 'es'){
        return (
            <div className='box'>
                <p>Hola {props.children}</p>
            </div>
         )
    } else if (props.lang === 'en'){
        return (
            <div className='box'>
                <p>Hi {props.children}</p>
            </div>
         )
    }
}

export default Greetings;