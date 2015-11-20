import React from 'react';
import Person from './person.jsx';

let People = React.createClass({

  getDefaultProps() {
    return {
      people: [],
    };
  },

  render() {
    let people = this.props.people;
    return (
      <div className="people">
        {people.map(function(person) {
          return <Person key={person.id} person={person} />;
        })}
      </div>
    );
  },

});


export default People;
