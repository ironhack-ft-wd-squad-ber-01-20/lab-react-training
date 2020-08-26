import React, {Component} from 'react';

export default class CreditCard extends Component{
    
    render(){
        const divStyle = {
            backgroundColor: this.props.bgColor,
            color: this.props.color,
        };
        let card = './img/visa.png';
        if (this.props.type === 'Master Card') {
            card = './img/master-card.svg';
        }

        const maskify = (cc) => {
            const masked = cc.slice(-4);
            let countNum = "";
            for (let i = (cc.length) - 4; i > 0; i--) {
                countNum += "*"
            }
            return countNum + masked
        }

                return (
                    <div className="CreditCard" style={divStyle}>
                        <div className="type">
                            <img src={card} alt='cardpicture'></img>
                        </div>
                        <div className="number">
                            {maskify(this.props.number)}
                        </div>
                        <div className="expires-bank">
                            <span>{'Expires ' + this.props.expirationMonth + '/'+ this.props.expirationYear}</span>
                            <span className="bank">{this.props.bank}</span>
                        </div>
                        <div className="owner">{this.props.owner}</div>
                    </div>
                )
    }
} 