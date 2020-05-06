import React from 'react'

const Greeting = (props) => {
    const {lang,children} = props
    let sayHi
    if(lang === "de"){
        sayHi = "Hallo "
    }
    if(lang === "fr"){
        sayHi = "Bonjour "
    }
    return (
        <div className = "idCard" >
            <h1>{sayHi}{children}</h1>
        </div>
    )
}

export default Greeting;