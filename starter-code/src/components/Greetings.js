import React from 'react'; 


function Greetings(props) {
    let greeting="Hello"; 
    if (props.lang ==="fr") greeting="Salut"; 
    if (props.lang ==="de") greeting="Hallo"; 
    if (props.lang ==="es") greeting="Hola"; 
    return (
        <div className="greeting">
            <p>{greeting} {props.children}</p>
        </div>
    )
}

export default Greetings; 