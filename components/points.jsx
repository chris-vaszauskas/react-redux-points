import React from 'react';
import PointsButton from './points-button.jsx';
import noop from './noop';

let Points = React.createClass({

  getDefaultProps() {
    return {
      points: {
        count: 1,
        updating: false,
      },
      increment: noop,
      decrement: noop,
    };
  },

  render() {
    let points = this.props.points;
    let increment = this.props.increment;
    let decrement = this.props.decrement;
    return (
      <div className={'points' + (points.updating ? ' points--updating' : '')}>
        <PointsButton onClick={increment} />
        <span className="points__count">{points.count}</span>
        <PointsButton inc={false} onClick={decrement} />
      </div>
    );
  },

});


export default Points;
