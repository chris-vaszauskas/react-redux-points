import React from 'react';
import People from './people.jsx';

let App = React.createClass({

  getDefaultProps() {
    return {
      people: [],
    };
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


export default App;
