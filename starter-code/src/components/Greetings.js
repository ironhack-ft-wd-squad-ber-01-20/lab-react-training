import React from 'react';

const Greetings = (props) => {
    const {lang, children} = props
    let hi
    if(lang === 'de') {
        hi = 'Halo'
    }
    if(lang === 'fr') {
        hi = 'Bonjour'
    }
    if(lang === 'en') {
        hi = 'Hello'
    }
    if(lang === 'es') {
        hi = 'Hola'
    }
    return (
        <div>
            <h3>{hi} {children}</h3>
        </div>
    )
}

export default Greetings
