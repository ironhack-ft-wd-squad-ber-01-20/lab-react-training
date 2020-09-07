import React, { Component } from 'react'
import profiles from '../data/berlin.json'

export default class FaceBook extends Component {

    state = {
        profiles: profiles
    }

    englandHandler = () => {
        this.setState((state, props) => ({
            profiles: profiles.country
        }))
        return ({

        })
    }
    
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
                <button>All</button>
                <button onClick={this.englandHandler}>England</button>
                <button>USA</button>
                <button>Malasya</button>
                <button>Germany</button>
                <button>Sweden</button>
                <button>Nigeria</button>
                <button>Italy</button>
                {profilesFB}
            </div>
        )
    }
}