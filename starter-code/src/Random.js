import React from 'react'
import './Random.css';

const Random =(props)=>{
    let Random=Math.floor(Math.random()*(Number(props.max)-Number(props.min)))
    return(
<div className='randomBox'>
    Random Value between {props.min} and {props.max} => {Random}
</div>
    );
};

export default Random;