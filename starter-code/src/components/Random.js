import React from 'react'

const Random = (props) => {
    const {min,max} = props
    function between(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
      }
    return (
        <div  className = "idCard" >
            <h1>Random Number between {min} and {max} => {between(min,max)}</h1>
        </div>
    )
}

export default Random;