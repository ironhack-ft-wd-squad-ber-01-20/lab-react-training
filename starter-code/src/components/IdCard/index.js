import React from 'react'
import './style.css'

export default function index({ firstName, lastName, picture, gender, height, birth }) {
    return (
        <figure className="card">
            <img className='card-img' src={picture} alt="username" />
            <div className="card-body">
                <p>First name:{firstName}</p>
                <p>Last name:{lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birthday: {birth
                    .toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                    )}</p>
            </div>
        </figure >
    )
}
