import React from 'react'
import './style.css'

export default function index({ min, max }) {
    const random = Math.floor(Math.random() * max) + min
    return (
        <p className='number'>
            Random value between {min} and {max} = {random}
        </p>
    )
}
