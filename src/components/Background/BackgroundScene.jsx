import StarField from './StarField.jsx';
import NebulaClouds from './NebulaClouds.jsx';
import ParticleField from './ParticleField.jsx';
import AntiGravityBuilding from './AntiGravityBuilding.jsx';

export { AntiGravityBuilding };

export default function BackgroundScene() {
  return (
    <>
      <StarField />
      <NebulaClouds />
      <ParticleField />
    </>
  );
}

