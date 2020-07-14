import React from 'react'

function langSelector(language) {
    switch (language) {
        case "de":
            return "Hallo";
        case "es":
            return "Hola";
        case "en":
            return "Hello";
        default:
            return "Bonjour"
    }
}

const Greetings = (props) => {
    return (
        <p>{langSelector(props.lang)} {props.children}</p>
    )
}

export default Greetings