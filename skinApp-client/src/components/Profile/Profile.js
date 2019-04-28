import React from 'react'
import {makeProfileArray} from '../../data.fixtures'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skinType: ' ', 
      climate: ' '
    }
  }
  static defaultProps = {
    profiles: makeProfileArray()
  }
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
        </div>  
      )
    }
  }
export default Profile