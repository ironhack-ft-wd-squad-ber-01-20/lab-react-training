import React from "react";

const Greetings = (props) => {

    if (props.lang === 'de')
    return <div className='box'>Hallo {props.children}</div>
        else if (props.lang === 'fr')
            return <div className='box'>Bonjour {props.children}</div> 
                else if (props.lang === 'es') return <div className='box'>Hola {props.children}</div>
                    else if (props.lang === 'en') return <div className='box'>Hi {props.children}</div>
                    
}

export default Greetings;