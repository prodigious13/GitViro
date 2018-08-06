import React, { Component } from 'react';
import { ViroText, ViroARScene, ViroImage } from 'react-viro';
import { StyleSheet } from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this._incrementCounter = this._incrementCounter.bind(this);
    this._decrementCounter = this._decrementCounter.bind(this);
    this._resetCounter = this._resetCounter.bind(this);
  }
  _incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  _decrementCounter() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  _resetCounter() {
    this.setState({
      counter: 0,
    });
  }
  render() {
    return (
      <React.Fragment>
        <ViroText
          text={'Counter:' + this.state.counter.toString()}
          scale={[0.5, 0.5, 0.5]}
          height={1}
          width={4}
          position={[0, 0, -1]}
          style={styles.counterTextStyle}
        />
        <ViroImage
          scale={[0.1, 0.1, 0.1]}
          height={2}
          width={4}
          position={[-0.2, -0.25, -1]}
          source={require('../res/btn_subtract.png')}
          onClick={this._decrementCounter}
        />
        <ViroImage
          scale={[0.1, 0.1, 0.1]}
          height={2}
          width={4}
          position={[0.2, -0.25, -1]}
          source={require('../res/btn_add.png')}
          onClick={this._incrementCounter}
        />
        <ViroText
          text="RESET"
          scale={[0.5, 0.5, 0.5]}
          height={1}
          width={4}
          position={[0, -0.5, -1]}
          style={styles.counterTextStyle}
          onClick={this._resetCounter}
        />
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  counterTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = Counter;
