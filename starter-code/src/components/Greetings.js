import React, {Component} from "react";

export default class Greetings extends Component {
    render(){
        if (this.props.lang === 'de')
        return <div className='box'>Hallo {this.props.children}</div>
            else if (this.props.lang === 'fr')
                return <div className='box'>Bonjour {this.props.children}</div> 
                    else if (this.props.lang === 'es') return <div className='box'>Hola {this.props.children}</div>
                        else if (this.props.lang === 'en') return <div className='box'>Hi {this.props.children}</div>
    }                
}