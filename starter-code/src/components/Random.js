import React from 'react';

const Random = (props) => {
    const {min, max} = props
    let randomNumber = Math.floor(Math.random() * Math.floor(max))
    return(
        <div className='Random'>
            <h3>Random value between {min} and {max} = {randomNumber}</h3>
        </div>
    )
}
export default Random;