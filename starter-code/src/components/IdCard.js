import React from 'react'

const IdCard = (props) => {
    const {lastName, firstName, gender, height,birth,picture} = props
const date = birth
const formattedDate = Intl.DateTimeFormat('en-US',{
  year: 'numeric',
  month: 'short',
  day: '2-digit' }).format(date);
    return (
        <div className = "idCard" >
            <div>
            <h3> <strong>Name</strong>  : {lastName} {firstName}</h3>
           <h3> <strong>Gender</strong> : {gender}</h3>
           <h3> <strong>Height</strong> : {height}</h3>
           <h3> <strong>Birthday</strong> : {formattedDate}</h3>
            </div>
           <div className="picture">
           <img src={picture} alt="" />
           </div>
        </div>
    )
}

export default IdCard;