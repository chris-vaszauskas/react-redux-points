import React from 'react';
import Points from './points.jsx';
import { incrementPoints, decrementPoints } from '../model/actions';

export default React.createClass({

  propTypes: {
    person: React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      points: React.PropTypes.object,
    }),
  },

  contextTypes: {
    store: React.PropTypes.object,  // comes from Redux
  },

  getDefaultProps() {
    return {
      person: {},
    };
  },

  increment() {
    let action = incrementPoints(this.props.person);
    this.context.store.dispatch(action);
  },

  decrement() {
    let action = decrementPoints(this.props.person);
    this.context.store.dispatch(action);
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
