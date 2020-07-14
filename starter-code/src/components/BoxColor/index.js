import React from 'react'
import './style.css'

export default function index({ r, g, b }) {
    const styles = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
    return (
        <div className='boxcolor' style={styles}>
            <p>RGB ({r}, {g}, {b})</p>
            <p># {RGBToHex(r, b, b)}</p>
        </div>
    )
}
