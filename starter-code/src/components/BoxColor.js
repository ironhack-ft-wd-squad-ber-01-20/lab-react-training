import React, {Component} from "react";

export default class BoxColor extends Component {
    render(){
        const divStyle = {
            backgroundColor: 'rgb(' + this.props.r + ', '+ this.props.g + ', '+ this.props.b + ')',
            color: this.props.color,
        };
            return (
                <div className="BoxColor box" style={divStyle}>
                    {'rgb(' + this.props.r + ', '+ this.props.g + ', '+ this.props.b + ')'}
                </div>
                )
    }
}