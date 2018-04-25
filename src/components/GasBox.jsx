import React, { Component } from 'react';

class GasBox extends Component {
  render() {
    const gasSaved = ['20000 ETH'];

    return (
      <div className="gasBox">
        <ul><b>Gas Saved</b>: {gasSaved}</ul>
      </div>
    )
  }
}

export default GasBox;