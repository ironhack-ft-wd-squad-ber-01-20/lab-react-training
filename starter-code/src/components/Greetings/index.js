import React from 'react'
import './style.css'

export default function index({ lang, children }) {
    const greeting = {
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Hola',
        en: 'Hello'
    }
    return (
        <p className='greeting'>{greeting[lang]}<span> {children}</span></p >
    )
}
