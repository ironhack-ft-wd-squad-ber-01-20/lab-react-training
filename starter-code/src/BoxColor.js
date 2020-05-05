import React from 'react'
import './BoxColor.css';

const BoxColor =(props)=>{
    return (
<div className='BoxColorBox' style={{
    backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`
}}>
<div className='rgb'>
<p >rgb({props.r}, {props.g}, {props.b})</p>
<p>{ props.hex}</p>
</div>
</div>
    );
};

export default BoxColor;