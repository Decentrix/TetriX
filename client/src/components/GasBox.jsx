import React, { Component } from 'react';

class GasBox extends Component {
  render() {
    const gasSaved = this.props.difference;

    return (
      <div className="gasBox">
        <ul><b>GAS SAVED:</b> {gasSaved}</ul>
      </div>
    )
  }
}

export default GasBox;