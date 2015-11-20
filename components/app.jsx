import React from 'react';
import People from './people.jsx';

export default React.createClass({

  propTypes: {
    people: React.PropTypes.array,
  },

  render() {
    let people = this.props.people;
    return (
      <div className="app">
        <People people={people} />
      </div>
    );
  },

});
