import React, { Component } from 'react';
import {
  ViroPortalScene,
  ViroPortal,
  Viro3DObject,
  Viro360Video,
} from 'react-viro';
export default class Surf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
    };
    this._togglePlay = this._togglePlay.bind(this);
  }
  _togglePlay() {
    this.setState({
      paused: !this.state.paused,
    });
  }
  render() {
    return (
      <ViroPortalScene
        passable={true}
        dragType="FixedToWorld"
        onDrag={() => {}}
        position={[-1, 0, 1]}
        onPortalEnter={this._togglePlay}
        onPortalExit={this._togglePlay}
        rotation={[0, 160, 0]}
      >
        <ViroPortal scale={[0.5, 0.5, 0.5]}>
          <Viro3DObject
            source={require('../res/portal_window_frame/portal_window_frame.vrx')}
            resources={[
              require('../res/portal_window_frame/portal_window_frame_diffuse.png'),
              require('../res/portal_window_frame/portal_window_frame_normal.png'),
              require('../res/portal_window_frame/portal_window_frame_specular.png'),
            ]}
            type="VRX"
          />
        </ViroPortal>
        <Viro360Video
          source={require('../res/360_surf.mp4')}
          paused={this.state.paused}
          loop={true}
          muted={false}
        />
      </ViroPortalScene>
    );
  }
}
module.exports = Surf;
