import { useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useCallback } from 'react';
import { GroupProps, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import seeHouseScene from '../assets/3d/sea_house.glb';

interface SeaHouseProps extends GroupProps {
  isRotating: boolean;
  setIsRotating: (rotating: boolean) => void;
  currentFocusPoint: number;
  setCurrentStage: React.Dispatch<React.SetStateAction<number | null>>;
  setHouseRotation: React.Dispatch<React.SetStateAction<number>>;
}

const SeaHouse: React.FC<SeaHouseProps> = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) => {
  const seaHouseRef = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF(seeHouseScene);
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = useCallback(
    (event: PointerEvent | TouchEvent) => {
      event.preventDefault();
      setIsRotating(true);
      lastX.current =
        'touches' in event ? event.touches[0].clientX : event.clientX;
    },
    [setIsRotating],
  );

  const handlePointerUp = useCallback(() => {
    setIsRotating(false);
  }, [setIsRotating]);

  const handlePointerMove = useCallback(
    (event: PointerEvent | TouchEvent) => {
      if (!isRotating || !seaHouseRef.current) return;

      const clientX =
        'touches' in event ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      seaHouseRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    },
    [isRotating, viewport.width],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        if (!isRotating) setIsRotating(true);
        const direction = event.key === 'ArrowLeft' ? 1 : -1;
        seaHouseRef.current.rotation.y += direction * 0.005 * Math.PI;
        rotationSpeed.current = direction * 0.007;
      }
    },
    [isRotating, setIsRotating],
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        setIsRotating(false);
      }
    },
    [setIsRotating],
  );

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp,
  ]);

  useFrame(() => {
    if (!seaHouseRef.current) return;

    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
    }

    seaHouseRef.current.rotation.y += rotationSpeed.current;

    const normalizedRotation =
      ((seaHouseRef.current.rotation.y % (2 * Math.PI)) + 2 * Math.PI) %
      (2 * Math.PI);

    if (isRotating) {
      if (normalizedRotation >= 5.45 && normalizedRotation <= 5.85)
        setCurrentStage(4);
      else if (normalizedRotation >= 0.85 && normalizedRotation <= 1.3)
        setCurrentStage(3);
      else if (normalizedRotation >= 2.4 && normalizedRotation <= 2.6)
        setCurrentStage(2);
      else if (normalizedRotation >= 4.25 && normalizedRotation <= 4.75)
        setCurrentStage(1);
      else setCurrentStage(null);
    }
    props.setHouseRotation(seaHouseRef.current.rotation.y);
  });

  return (
    <group ref={seaHouseRef} {...props} dispose={null}>
      <group scale={0.1}>
        <group
          position={[2.045, 0.446, -0.755]}
          rotation={[0.018, -0.014, -0.013]}
          scale={17.555}
        >
          {[
            'ChimneyMaterial',
            'PineAppleMaterial',
            'DoorMaterial',
            'DoorWheelMaterial',
            'WindowMaterial',
            'CrownMaterial',
          ].map((material) => (
            <mesh
              key={material}
              castShadow
              receiveShadow
              geometry={nodes[`SpongebobsHouse_${material}_0`].geometry}
              material={materials[material]}
            />
          ))}
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Flowers_FlowersMaterial_0.geometry}
          material={materials.FlowersMaterial}
          position={[1.643, -0.996, -3.58]}
          rotation={[0.006, -0.038, 0.003]}
          scale={50.902}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Path_PathMaterial_0.geometry}
          material={materials.PathMaterial}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1549.208, 1183.29, 1183.29]}
        />
      </group>
    </group>
  );
};

export default SeaHouse;
