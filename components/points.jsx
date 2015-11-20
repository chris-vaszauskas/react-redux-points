import React from 'react';
import PointsButton from './points-button.jsx';
import noop from './noop';

export default React.createClass({

  propTypes: {
    points: React.PropTypes.shape({
      count: React.PropTypes.number,
      updating: React.PropTypes.bool,
    }),
    increment: React.PropTypes.func,
    decrement: React.PropTypes.func,
  },

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
    let { points, increment, decrement } = this.props;
    return (
      <div className={'points' + (points.updating ? ' points--updating' : '')}>
        <PointsButton onClick={increment} />
        <span className="points__count">{points.count}</span>
        <PointsButton inc={false} onClick={decrement} />
      </div>
    );
  },

});
