import React from 'react';
import './BoxColor.css'


export default function BoxColor(props) {
    
    const {r, g, b} = props;
    
    const style = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return (
        <div className="boxcolor" style={style}>rgb({r},{g},{b})</div>
    )
}
