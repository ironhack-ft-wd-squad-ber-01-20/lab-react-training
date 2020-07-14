import React from 'react';

const BoxColor = (props) => {
    const { r, g, b } = props;
    const style = {
        backgroundColor: `rgb(${r},${g},${b})`
    };

    return (
        <div className='BoxColor' style={style}>rgb({r},{g},{b})</div>
    )
}

export default BoxColor