import React, { Component } from 'react'
import profiles from '../data/berlin.json'

export default class FaceBook extends Component {
    
    render() {
        const profilesFB = profiles.map((profile, index) => {
            return (
                <div key={index} className='IdCard box'>
                        <img className='ClickablePicture' src={profile.img} alt='fbpicture'></img>
                        <div className='rigth'>
                            <strong>First Name:</strong>{profile.firstName}<br></br>
                            <strong>Last Name:</strong>{profile.lastName}<br></br>
                            <strong>Country:</strong>{profile.country}<br></br>
                            {profile.isStudent === true  &&  <div><strong>Type:</strong>Student</div> }
                        </div>
                </div>)
        })
        return (
            <div>
                {profilesFB}
            </div>
        )
    }
}