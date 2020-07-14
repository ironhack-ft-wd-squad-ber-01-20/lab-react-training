import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import './style.css'

export default function index({ children }) {
    const howManyChecked = Math.round(Number(children))
    const arrayStarts = [1, 2, 3, 4, 5]
    return (
        <div className="rating">
            {arrayStarts.map((star, index) => <span key={uuidv4()} className={`fa fa-2x fa-star ${index < howManyChecked ? 'checked' : ''}`}></span>)}
        </div>
    )
}
