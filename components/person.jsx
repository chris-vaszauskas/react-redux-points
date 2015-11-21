import React from 'react';
import Points from './points.jsx';
import { incrementPoints, decrementPoints } from '../model/actions';

let Person = React.createClass({

  // Allows this component to access this.context.store, which is the Redux store
  // (provided by the fact that <App /> is surrounded by <Provider /> in main.jsx)
  contextTypes: {
    store: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      person: {},
    };
  },

  increment() {
    let store = this.context.store;
    incrementPoints(store, this.props.person);
  },

  decrement() {
    let store = this.context.store;
    decrementPoints(store, this.props.person);
  },

  render() {
    let person = this.props.person;
    return (
      <div className="person">
        <span className="person__name">{person.name}</span>
        <Points points={person.points} increment={this.increment} decrement={this.decrement} />
      </div>
    );
  },

});


export default Person;
