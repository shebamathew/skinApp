import React from 'react'

export default class Profile extends React.Component {
    render () {
        // const profileData = this.props.profile
        //     .map((data, key) => <ListItem {...data} key={key} />);
      return (
        <section>
            <header>
              <h2>My Skin Profile</h2>
            </header>
            <dl>
              <dt>My Skin Type</dt>
                <dd>{this.props.profile[0].skinType}</dd>
              <dt>My Climate</dt>
              <dd>{this.props.profile[0].climate}</dd>
            </dl>
            <button>Edit Your Skin Profile</button>
          </section>
      )
    }
  }