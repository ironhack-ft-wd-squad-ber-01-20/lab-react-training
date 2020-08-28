import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        clicked: false
    }
    
    clickHandler = () => {

        const iconWhite = this.props.initialImg;
        console.log(iconWhite);

        this.setState((state) => ({
            clicked: !state.clicked
        }))
    }    

    render() {

        return (
            <div>
                <img 
                    className="ClickablePicture" alt="person"  
                    onClick={this.clickHandler}
                    src={this.state.clicked ? this.props.clickedImg : this.props.initialImg} 
                />
            </div>
        )
    }
}