import React from 'react'
import Visa from '../../assets/img/visa.png'
import MasterCard from '../../assets/img/master-card.svg'
import './style.css'

export default function index({ type, number, expirationMonth, expirationYear,
    bank, owner, bgColor, color }) {

    const styles = {
        backgroundColor: bgColor,
        color: color,
    }

    const hideNumber = number.split('').map((element, index) => index < number.length - 4 ? '*' : element).join('')

    return (
        <div className="credit-card" style={styles}>
            <img className='credit-card-flag' src={type === 'Visa' ? Visa : MasterCard} alt="Credit Card" />
            <p className="credit-card-number">{hideNumber}</p>
            <div className='credit-card-info'>
                <p className="credit-card-expires">Expires {expirationMonth}/{expirationYear} <span className="credit-card-bank">{bank}</span></p>
                <p className="credit-card-name">{owner}</p>
            </div>
        </div>
    )
}
