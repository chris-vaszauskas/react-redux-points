import React from 'react';
import noop from './noop';

let PointsButton = React.createClass({

  getDefaultProps() {
    return {
      inc: true,
      onClick: noop,
    };
  },

  render() {
    let className = 'points-button ';
    className += this.props.inc ? 'points-button--inc' : 'points-button--dec';
    return <button className={className} onClick={this.props.onClick}></button>;
  },

});


export default PointsButton;
