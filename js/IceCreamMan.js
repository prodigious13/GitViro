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

class IceCreamMan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runAnimation: true,
    };
    this._onTappedIcecream = this._onTappedIcecream.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <ViroDirectionalLight color="#ffffff" direction={[0, -1, -0.2]} />
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <Viro3DObject
          source={require('./res/icecreamman_anim/icecreamman_anim_a.vrx')}
          resources={[
            require('./res/icecreamman_anim/icecreamman_diffuse.png'),
            require('./res/icecreamman_anim/icecreamman_normal.png'),
            require('./res/icecreamman_anim/icecreamman_specular.png'),
          ]}
          position={[0, 0, -8]}
          scale={[5, 5, 5]}
          type="VRX"
          dragType="FixedToWorld"
          onDrag={() => {}}
          onClick={this._onTappedIcecream}
          animation={{ name: '02', run: this.state.runAnimation, loop: true }}
        />
      </React.Fragment>
    );
  }

  _onTappedIcecream() {
    this.setState({
      runAnimation: !this.state.runAnimation,
    });
  }
}
export default IceCreamMan;
module.exports = IceCreamMan;
