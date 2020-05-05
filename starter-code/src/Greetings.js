import React from 'react'
import './Greetings.css';

const Greetings=(props)=>{
    let language={
        de: "Hallo",
        en:"Hello",
        es:'Hola',
        fr:'Bonjour'
    };
    let greetings= language[props.lang];
    return (
<div className='greetingsBox'>
{greetings} {props.children}
</div>
    );
};

export default Greetings;
