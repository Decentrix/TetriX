import React, {Component} from 'react';
import ContractContainer from './ContractContainer.jsx';
import GasBox from './GasBox.jsx';
// import splitCode from '../../../src/parser';

// console.log('splitCode', splitCode);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalCode: ['contract Lottery {', '  uint[] a', '  int a', '  int b', '  int c', '  int d', '  int e', '  int f', '  int g', '  int h'],
      optimizedCode: ['contract Lottery {', '  int a', '  int b', '  int c', '  int d', '  int e', '  int f', '  int g', '  int h', '  uint[] a']
    }
  }

  render() {
    return (
      <div className="app">
        <ContractContainer orgCode={this.state.originalCode} optCode={this.state.optimizedCode}/>
        <GasBox />
      </div>
    );
  }
}

export default App;