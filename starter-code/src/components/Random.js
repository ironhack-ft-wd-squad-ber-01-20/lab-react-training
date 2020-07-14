import React from 'react';

const Random = (props) => {
    const min = Math.ceil(props.min);
    const max = Math.floor(props.max);
    const randomNumber = Math.floor(Math.random() * (max-min) + min);
    return <p>Random value between {min} and {max} is <strong>{randomNumber}</strong></p>
}

export default Random;