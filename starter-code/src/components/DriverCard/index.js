import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Rating from '../Rating'
import './style.css'

export default function index({ img, name, rating, car }) {
    return (
        <div className="drive-card">
            <img className="drive-card-img" src={img} />
            <div className="drive-card-details">
                <p className="drive-card-name">{name}</p>
                <Rating>{rating}</Rating>
                <p><span>{car.model} - {car.licensePlate}</span></p>
            </div>
        </div>
    )
}
