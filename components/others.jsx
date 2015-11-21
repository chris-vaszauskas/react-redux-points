import React from 'react';

let Others = React.createClass({

  getDefaultProps() {
    return {
      others: [],
    };
  },

  render() {
    let others = this.props.others;
    return (
      <div className="others">
        <span>There are {others.length} others. Their numbers are</span>
        {others.map(function(other, index) {
          return <span key={index}> {other}</span>;
        })}
        <span>.</span>
      </div>
    );
  },

});


export default Others;
