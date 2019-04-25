import React from 'react';
import './Routine.css';
import ListItem from '../ListItem/ListItem'

class Routine extends React.Component {
  render() {
    const list = this.props.products
        .map((product, key) => <ListItem {...product} key={key} />);
    return (
      <div className="Routine">
        {list}
        <button>Edit Your Skin Profile</button>
      </div>  
    );
  }
}

Routine.defaultProps = {
  products: []
};

export default Routine;