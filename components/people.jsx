import React from 'react';
import Person from './person.jsx';

export default React.createClass({

  propTypes: {
    people: React.PropTypes.array,
  },

  getDefaultProps() {
    return {
      people: [],
    };
  },

  render() {
    let people = this.props.people;
    return (
      <div className="people">
        {people.map(person => <Person key={person.id} person={person} />)}
      </div>
    );
  },

});
