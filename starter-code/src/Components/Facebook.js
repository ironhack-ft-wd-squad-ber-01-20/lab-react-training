import React from 'react';

function Facebook(props) {
    
    const copy = props.profilesData.map(profile => {
        return (
         <div className="profile"> 
              <div><img src={profile.img} style={{ width: '100px' }}/></div>
            <div className="id">
              <div>{profile.firstName} {profile.lastName}</div>
              <div>{profile.country}</div>
              </div>
          </div>
        )
    })

    return copy.slice(0,5);
}

export default Facebook;