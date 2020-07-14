import React from 'react';

const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture } = props
    const date = birth
    const formattedDate = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(date);
    return (
        <div className='IdCard'>
                <img src={picture} alt='portrait' />
            <div>
                <h3><strong>First name</strong>: {firstName}</h3>
                <h3><strong>Last Name</strong>: {lastName}</h3>
                <h3><strong>Gender</strong>: {gender}</h3>
                <h3><strong>Height</strong>: {height}</h3>
                <h3><strong>Birth</strong>: {formattedDate}</h3>
            </div>
        </div>
    )
}


export default IdCard;