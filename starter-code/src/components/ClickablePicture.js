import React, { Component } from 'react';

class ClickablePicture extends Component {
    state = {
        img: this.props.img
    };

    clickHandler = () => {
        if (this.state.img === this.props.img) {
            this.setState({
                img: this.props.imgClicked
            })
        } else {
            this.setState({
                img: this.props.img
            })
        }

    }
    render() {
        return (
            <div>
                <img onClick={this.clickHandler} src={this.state.img} />
            </div>
        )
    }

}

export default ClickablePicture;