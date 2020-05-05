import React from 'react';

const Greetings = (props) =>{
    const greeting = {
        de: "Hallo",
        en: "Hello",
        es: "Buenos Dias",
        fr: "Bonjour"
    }
    return (
        <p>
      {greeting[props.lang]} {props.children}
        </p>

    )
}
export default Greetings;