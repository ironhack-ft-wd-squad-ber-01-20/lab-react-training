import React from 'react';

const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    let card = './img/visa.png';
    if (type === 'Master Card') {
        card = './img/master-card.svg';
    }
    const style = {
        width: "300px",
        color: color,
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        borderRadius: "5%",
        marginLeft: "10px",
    };
    const row = {
        display: "flex",
        flexDirection: "row",
    };
    const imgStyle = {
        width: '30%'
    };
    // Masking the Credit Card
    function maskify(cc) {
        const masked = cc.slice(-4);
        let countNum = "";
        for (let i = (cc.length) - 4; i > 0; i--) {
            countNum += "#"
        }
        return countNum + masked
    }

    return (

        <div style={style} className='CreditCard'>
            <div>
                <img src={card} style={imgStyle} />
            </div>

            <div>
                <p>{maskify(number)}</p>
            </div>

            <div style={row}>
                <p>{expirationMonth}</p>
                <p>{expirationYear}</p>
                <p>{bank}</p>
            </div>

            <div>
                <p>{owner}</p>
            </div>
        </div>

    )
}

export default CreditCard;
