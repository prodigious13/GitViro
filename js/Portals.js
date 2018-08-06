'use strict';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroPortal,
  ViroPortalScene,
  Viro360Image,
  Viro360Video,
} from 'react-viro';
import Island from './components/Island';
import Surf from './components/Surf';
import Counter from './components/Counter';
import Github from './components/Github';

export default class MainPortalScene extends Component {
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <Island />
        <Surf />
        <Counter />
        <Github
          url={'https://api.github.com/repos/facebook/react'}
          position={[8, 0, 0]}
          rotation={[0, -75, 0]}
        />
        <Github
          url={'https://api.github.com/repos/bitcoin/bitcoin'}
          position={[-8, 0, 0]}
          rotation={[0, 75, 0]}
        />
        <ViroAmbientLight color={'#aaaaaa'} />
      </ViroARScene>
    );
  }
}

module.exports = MainPortalScene;
