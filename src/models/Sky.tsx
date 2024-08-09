import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RootState, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

import skyScene from '../assets/3d/sky.glb';

interface SkyProps {
  isRotating?: boolean;
}

const Sky = ({ isRotating }: SkyProps) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<Mesh>(null);

  useFrame((_: RootState, delta: number) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
