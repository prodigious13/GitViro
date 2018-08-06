import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import {
  Viro3DObject,
  ViroImage,
  ViroNode,
  ViroText,
  ViroParticleEmitter,
} from 'react-viro';

export default class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const response = await axios.get(this.props.url);
    const repo = response.data;
    const { name, stargazers_count, owner, open_issues_count } = repo;
    this.setState({
      name: name,
      stargazers_count: stargazers_count,
      owner,
      open_issues_count: open_issues_count,
    });
  }
  render() {
    return !this.state.name ? (
      <ViroText
        text="Loading"
        height={1}
        width={4}
        scale={[0.5, 0.5, 0.5]}
        style={styles.loadingTextStyle}
        position={[3, 0, -3]}
      />
    ) : (
      <ViroNode
        dragType="FixedDistance"
        onDrag={() => {}}
        position={this.props.position}
        rotation={this.props.rotation}
      >
        <ViroText
          text={this.state.name}
          height={2}
          width={4}
          scale={[5, 5, 5]}
          position={[0, 3, 0]}
          style={styles.loadingTextStyle}
        />
        <ViroText
          text={'Stars: ' + this.state.stargazers_count.toString()}
          height={2}
          width={4}
          scale={[2, 2, 2]}
          position={[0, 2, 0]}
          style={styles.loadingTextStyle}
        />
        <ViroText
          text={'Issues: ' + this.state.open_issues_count.toString()}
          height={2}
          width={4}
          scale={[2, 2, 2]}
          position={[0, -2.5, 0]}
          style={styles.loadingTextStyle}
        />
        <ViroImage
          height={4}
          width={4}
          source={{ uri: this.state.owner.avatar_url }}
        />
        {/* <Viro3DObject
          position={[0, 3, 0]}
          source={require('../res/object_star_anim/object_star_anim.vrx')}
          resources={[
            require('../res/object_star_anim/object_star_diffuse.png'),
            require('../res/object_star_anim/object_star_specular.png'),
          ]}
          scale={[0.2, 0.2, 0.2]}
          type="VRX"
        /> */}
        <ViroParticleEmitter
          position={[0, 3, 0]}
          duration={5000}
          visible={true}
          run={true}
          loop={true}
          fixedToEmitter={true}
          image={{
            source: require('../res/star-icon.png'),
            height: 0.1,
            width: 0.1,
            bloomThreshold: 1.0,
          }}
          spawnBehavior={{
            particleLifetime: [5000, 5000],
            emissionBurst: [
              {
                time: 0,
                min: Math.floor(this.state.stargazers_count / 1000),
                max: Math.floor(this.state.stargazers_count / 1000),
                cycles: 100,
                cooldownPeriod: 5000,
              },
            ],
            emissionRatePerSecond: [0, 0],
            spawnVolume: {
              shape: 'sphere',
              params: [0.1],
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
              initialRange: [[-2, 3, 2], [2, 0, 0]],
            },
            explosiveImpule: {
              impulse: 2,
              decelerationPeriod: 1.0,
            },
          }}
        />
        <ViroParticleEmitter
          position={[0, -3, 0]}
          duration={2000}
          visible={true}
          run={true}
          loop={true}
          fixedToEmitter={true}
          image={{
            source: require('../res/particle_fire.png'),
            height: 0.01,
            width: 0.01,
            bloomThreshold: 1.0,
          }}
          spawnBehavior={{
            particleLifetime: [5000, 5000],
            emissionRatePerSecond: [
              this.state.open_issues_count,
              this.state.open_issues_count,
            ],
            spawnVolume: {
              shape: 'box',
              params: [20, 10, 1],
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
      </ViroNode>
    );
  }
}
const styles = StyleSheet.create({
  loadingTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
module.exports = Github;
