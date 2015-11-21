import React from 'react';
import People from './people.jsx';
import Others from './others.jsx';

let App = React.createClass({

  getDefaultProps() {
    return {
      people: [],
      others: [],
    };
  },

  render() {
    let people = this.props.people;
    let others = this.props.others;
    return (
      <div className="app">
        <People people={people} />
        <Others others={others} />
      </div>
    );
  },

});


export default App;
