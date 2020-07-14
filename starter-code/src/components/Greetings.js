import React from 'react';

const Greetings = (props) => {
    const lang = props.lang;
    if (lang === 'de') return <p>Hallo {props.name}</p>
    else if (lang === 'en') return <p>Hello {props.name}</p>
    else if (lang === 'es') return <p>Hola {props.name}</p>
    else if (lang === 'fr') return <p>Bonjour {props.name}</p>
}

export default Greetings;