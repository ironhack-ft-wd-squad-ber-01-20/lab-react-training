import React from 'react'
import './style.css'

export default function index({ r, g, b }) {
    const styles = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return (
        <div className='boxcolor' style={styles}>
            <p>RGB ({r}, {g}, {b})</p>
        </div>
    )
}
