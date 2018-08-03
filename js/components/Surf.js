import React from 'react';
import {
  ViroPortalScene,
  ViroPortal,
  Viro3DObject,
  Viro360Video,
} from 'react-viro';
const Surf = () => (
  <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
    <ViroPortal position={[-1, 0, -1]} scale={[0.5, 0.5, 0.5]}>
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
    <Viro360Video source={require('../res/360_surf.mp4')} loop={true} />
  </ViroPortalScene>
);

export default Surf;
