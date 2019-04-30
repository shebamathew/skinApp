import React from 'react'

class Profile extends React.Component {
    render () {
        const profile = this.props.profiles[0]
      return (
        <div className="Profile">
        <p>Your Skin Profile</p>
          <div className="profile-section">
            <p>Your Skin Type:
              {profile.skinType}
            </p>
          </div>
          <div className="profile-section">
            <p>Your Climate:
              {profile.climate}
            </p>
          </div>
          <div className="profile-section">
            <p>Your Top Skin Concern:
              {profile.skinConcern}
            </p>
          </div>
        </div>  
      )
    }
  }
export default Profile