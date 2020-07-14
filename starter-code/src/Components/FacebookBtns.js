import React from 'react';
import profiles from '../data/berlin.json'

class FacebookBtns extends React.Component {
    state = {
        profiles : profiles,
    }
    //return to full list
    seeAll = () => {
        this.setState ({
            profiles: profiles
        })
    }
    //filter to only German students
    displayGermans = () => {
        const copyGermans = this.state.profiles
        .map((profile) => profile)
        .filter ((profile) => profile.country === "Germany") 
        
        this.setState ({
            profiles: copyGermans
        })
    }
    //keep the full list but highlight certain country
    // highlightGermans = () => {
    //     const highlightedGermans = this.state.profiles
    //     .map((profile) => {
    //    
    //         return (
    //                 <div> 
    //                     <div className="highlight"> 
    //                     <div><img src={profile.img} style={{ width: '100px' }}/> </div>
    //                     <div className="id">
    //                         <div>{profile.firstName} {profile.lastName}</div>
    //                         <div>{profile.country}</div>
    //                     </div>
    //                     </div>
    //                 </div>
    //             )
            
    //     });
    //     this.setState ({
    //         profiles: highlightedGermans,
    //     });
    // }
    
    render() {
        const copy = this.state.profiles.map((profile) => {
            return (
                <div> 
                    <div className="profile"> 
                    <div><img src={profile.img} style={{ width: '100px' }}/> </div>
                    <div className="id">
                        <div>{profile.firstName} {profile.lastName}</div>
                        <div>{profile.country}</div>
                    </div>
                    </div>
                </div>
            )
        });
      return (
        <div>
            <button onClick={this.seeAll}>all students</button>
            <button onClick={this.displayGermans}>see only students from Germany</button>
            <button onClick={this.highlightGermans}>highlight students from Germany</button>
            {copy}
        </div>
      );     
   }
}



export default FacebookBtns;