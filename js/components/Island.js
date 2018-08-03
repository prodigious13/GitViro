import React from 'react';
import {
  ViroPortalScene,
  ViroPortal,
  Viro3DObject,
  Viro360Image,
} from 'react-viro';
const Island = () => (
  <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
    <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>
      <Viro3DObject
        source={require('../res/portal_ship/portal_ship.vrx')}
        resources={[
          require('../res/portal_ship/portal_ship_diffuse.png'),
          require('../res/portal_ship/portal_ship_normal.png'),
          require('../res/portal_ship/portal_ship_specular.png'),
        ]}
        type="VRX"
      />
    </ViroPortal>
    <Viro360Image source={require('../res/360_island.jpg')} />
  </ViroPortalScene>
);

export default Island;
