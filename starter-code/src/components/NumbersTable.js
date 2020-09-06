import React from 'react'

export default function NumbersTable (props) {

                let numbersArr = [];
                for (let i=1; i <= props.limit; i++) numbersArr.push(i);
                let background = "";

                const numbers = numbersArr.map((number, index) => {
                                number % 2 == 0 ? background="red" : background="white"
                        return(<li key= {index} style={ {backgroundColor:background }}>{number}</li>)
                        })
      
        return (<ul className="NumbersTable">{numbers}</ul>)
        }