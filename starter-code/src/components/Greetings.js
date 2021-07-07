import React from 'react';
import './Greetings.css';


    
const Greetings = (props) => {
    const {lang, children} = props;
    let salve;
    if(lang === 'de') {
        salve = 'Hallo'
    }
    if(lang === 'fr') {
        salve = 'Bonjour'
    }
    if(lang === 'en') {
        salve = 'Hello'
    }
    if(lang === 'es') {
        salve = 'Hola'
    }
    return (
        <div className = "greetings">
            <h3>{salve} {children}</h3>
        </div>
    )
}

export default Greetings