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

export default class MainPortalScene extends Component {
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <Island />
        <Surf />
        <ViroAmbientLight color={'#aaaaaa'} />
      </ViroARScene>
    );
  }
}

module.exports = MainPortalScene;
