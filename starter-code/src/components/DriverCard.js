import React, { Component } from 'react'
import Rating from './Rating'

export default class DriverCard extends Component {
    render() {
        return (
            <div className="DriverCard">
                <img src={this.props.img} alt={this.props.name}></img>
                <div>
                    <h2>{this.props.name}</h2>
                    <Rating rating={this.props.rating}/>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        )
    }
}