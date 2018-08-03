'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroSceneNavigator,
  ViroARScene,
  ViroMaterials,
  ViroAmbientLight,
  ViroSpotLight,
  ViroDirectionalLight,
  ViroAnimations,
  ViroParticleEmitter,
  ViroSurface,
  Viro3DObject,
} from 'react-viro';

var createReactClass = require('create-react-class');
var MainScene = createReactClass({
  getInitialState() {
    return {
      runAnimation: true,
    };
  },

  render: function() {
    return (
      <ViroARScene>
        <ViroDirectionalLight color="#ffffff" direction={[0, -1, -0.2]} />
        <ViroAmbientLight color="#ffffff" intensity={200} />

        <Viro3DObject
          source={require('./res/icecreamman_anim/icecreamman_anim_a.vrx')}
          resources={[
            require('./res/icecreamman_anim/icecreamman_diffuse.png'),
            require('./res/icecreamman_anim/icecreamman_normal.png'),
            require('./res/icecreamman_anim/icecreamman_specular.png'),
          ]}
          position={[0, -1, -2]}
          scale={[0.5, 0.5, 0.5]}
          type="VRX"
          dragType="FixedToWorld"
          onDrag={() => {}}
          onClick={this._onTappedIcecream}
          animation={{ name: '02', run: this.state.runAnimation, loop: true }}
        />
      </ViroARScene>
    );
  },

  _onTappedIcecream() {
    this.setState({
      runAnimation: !this.state.runAnimation,
    });
  },
});

module.exports = MainScene;
