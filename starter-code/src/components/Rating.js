import React from 'react';

const Rating = (props) => {
    const {children} = props
    let rating = Math.round(children);
    let stars = '';
    for(let i = 0; i < 5; i++){
        if(i < rating) {
            stars += '✦'
        }else {
            stars += '✧'
        }
    }
    return (
        <div>
            <div>{stars}</div>
        </div>
    )
}

export default Rating