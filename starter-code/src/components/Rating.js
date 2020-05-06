import React from 'react'

const Rating = (props) => {
    const {children} = props
    const number = Math.round(children)
    function fullStars(n){
       let array = []
       array.push("★".repeat(n),"☆".repeat(5-n))
       return array.join("")
    }
    return (
        <div  className = "" >
            <h1>{fullStars(number)}</h1>
        </div>
    )
    }

export default Rating;