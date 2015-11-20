import React from 'react';
import noop from './noop';

export default React.createClass({

  propTypes: {
    inc: React.PropTypes.bool,
    onClick: React.PropTypes.func,
  },

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
