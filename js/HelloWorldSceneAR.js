'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
  ViroQuad,
  ViroParticleEmitter,
  ViroPortal,
  ViroPortalScene,
  Viro360Image,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
      animationName: '01',
      runAnimation: false,
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._toggleAnimation = this._toggleAnimation.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}
        >
          <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>
            <Viro3DObject
              source={require('./res/portal_ship/portal_ship.vrx')}
              resources={[
                require('./res/portal_ship/portal_ship_diffuse.png'),
                require('./res/portal_ship/portal_ship_normal.png'),
                require('./res/portal_ship/portal_ship_specular.png'),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Image source={require('./res/360_island.jpg')} />
        </ViroPortalScene>
        <ViroText
          text={this.state.text}
          scale={[0.5, 0.5, 0.5]}
          height={1}
          width={4}
          position={[0, 0.5, -1]}
          style={styles.helloWorldTextStyle}
        />

        <ViroAmbientLight color={'#aaaaaa'} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
        />
        <Viro3DObject
          source={require('./res/icecreamman_anim/icecreamman_anim_a.vrx')}
          resources={[
            require('./res/icecreamman_anim/icecreamman_diffuse.png'),
            require('./res/icecreamman_anim/icecreamman_normal.png'),
            require('./res/icecreamman_anim/icecreamman_specular.png'),
          ]}
          position={[-0.3, 0.1, 0]}
          scale={[0.2, 0.2, 0.2]}
          type="VRX"
          onClick={this._toggleAnimation}
          animation={{
            name: this.state.animationName,
            run: this.state.runAnimation,
            loop: true,
          }}
        />
        <Viro3DObject
          source={require('./res/icecreamman_anim/icecreamman_anim_a.vrx')}
          resources={[
            require('./res/icecreamman_anim/icecreamman_diffuse.png'),
            require('./res/icecreamman_anim/icecreamman_normal.png'),
            require('./res/icecreamman_anim/icecreamman_specular.png'),
          ]}
          position={[0.3, 0.1, 0]}
          scale={[0.2, 0.2, 0.2]}
          type="VRX"
          onClick={this._toggleAnimation}
          animation={{
            name: this.state.animationName,
            run: this.state.runAnimation,
            loop: true,
          }}
        />
        <ViroNode
          position={[0, 0, -1]}
          dragType="FixedToWorld"
          onDrag={() => {}}
        >
          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0, -1, 0]}
            position={[0, 5, 0]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={0.7}
          />

          <Viro3DObject
            source={require('./res/icecreamman_anim/icecreamman_anim_a.vrx')}
            resources={[
              require('./res/icecreamman_anim/icecreamman_diffuse.png'),
              require('./res/icecreamman_anim/icecreamman_normal.png'),
              require('./res/icecreamman_anim/icecreamman_specular.png'),
            ]}
            position={[0, 0.1, 0]}
            scale={[0.2, 0.2, 0.2]}
            on
            type="VRX"
            onClick={this._toggleAnimation}
            animation={{
              name: this.state.animationName,
              run: this.state.runAnimation,
              loop: true,
            }}
          />

          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -0.001, 0]}
            width={2.5}
            height={2.5}
            arShadowReceiver={true}
          />
        </ViroNode>
        {/* <ViroNode
          position={[0, 0, -1]}
          dragType="FixedToWorld"
          onDrag={() => {}}
        >
          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0, -1, 0]}
            position={[0, 5, 0]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={0.7}
          />
          <Viro3DObject
            source={require('./res/icecreamman_anim/icecreamman_anim_a.vrx')}
            resources={[
              require('./res/icecreamman_anim/icecreamman_diffuse.png'),
              require('./res/icecreamman_anim/icecreamman_normal.png'),
              require('./res/icecreamman_anim/icecreamman_specular.png'),
            ]}
            position={[0, 0.1, 0]}
            scale={[0.2, 0.2, 0.2]}
            type="VRX"
            onClick={this._incrementAnimation}
            animation={{ name: this.state.text, run: true, loop: true }}
          />
          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -0.001, 0]}
            width={2.5}
            height={2.5}
            arShadowReceiver={true}
          />
        </ViroNode> */}
        <ViroParticleEmitter
          position={[0, 4.5, 0]}
          duration={2000}
          visible={true}
          run={true}
          loop={true}
          fixedToEmitter={true}
          image={{
            source: require('./res/particle_snow.png'),
            height: 0.01,
            width: 0.01,
            bloomThreshold: 1.0,
          }}
          spawnBehavior={{
            particleLifetime: [5000, 5000],
            emissionRatePerSecond: [200, 200],
            spawnVolume: {
              shape: 'box',
              params: [20, 1, 20],
              spawnOnSurface: false,
            },
            maxParticles: 2000,
          }}
          particleAppearance={{
            opacity: {
              initialRange: [0, 0],
              interpolation: [
                { endValue: 1.0, interval: [0, 500] },
                { endValue: 0.0, interval: [4000, 5000] },
              ],
            },
            scale: {
              initialRange: [[5, 5, 5], [10, 10, 10]],
              interpolation: [
                { endValue: [6, 6, 6], interval: [0, 1000] },
                { endValue: [10, 10, 10], interval: [3000, 5000] },
                { endValue: [5, 5, 5], interval: [4000, 5000] },
              ],
            },
          }}
          particlePhysics={{
            velocity: {
              initialRange: [[-2, -0.5, 0], [2, -3.0, 0]],
            },
          }}
        />
      </ViroARScene>
    );
  }
  _toggleAnimation() {
    this.setState({
      runAnimation: !this.state.runAnimation,
      animationName: '02',
    });
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: '01',
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
