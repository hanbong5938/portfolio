import { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Vector3 } from 'three';

import patrickStarScene from '../assets/3d/patrick_star.glb';

interface PatrickStarProps extends GroupProps {
  isRotating: boolean;
  position: Vector3;
  rotation: THREE.Euler;
  scale: Vector3;
  houseRotation: number;
}

const PatrickStar = ({ houseRotation, ...props }: PatrickStarProps) => {
  const { scene } = useGLTF(patrickStarScene);
  const patrickStarRef = useRef<THREE.Group>(null!);
  const [visible, setVisible] = useState(true);

  useFrame(({ clock }) => {
    if (patrickStarRef.current) {
      const time = clock.elapsedTime;

      const initialY = props.position.y;
      patrickStarRef.current.position.y = initialY + Math.sin(time * 2) * 0.1;

      const doorDistance = 1.6;
      const doorAngle = Math.PI - houseRotation;

      // 문의 반대편 위치 계산
      const oppositeDoorX = -Math.cos(doorAngle) * doorDistance;
      const oppositeDoorZ = -Math.sin(doorAngle) * doorDistance;

      const wanderRadius = 0.3;
      const wanderSpeed = 0.3;
      const wanderAngle = time * wanderSpeed;
      const wanderX = Math.cos(wanderAngle) * wanderRadius;
      const wanderZ = Math.sin(wanderAngle) * wanderRadius;

      // 반대편 위치에 wandering 적용
      patrickStarRef.current.position.x = oppositeDoorX + wanderX;
      patrickStarRef.current.position.z = oppositeDoorZ + wanderZ;

      // 회전 방향은 그대로 유지
      patrickStarRef.current.rotation.y =
        houseRotation + Math.atan2(wanderZ, wanderX) + Math.PI;

      // visible 로직은 그대로 유지
      const normalizedRotation =
        ((houseRotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      const rotationDegrees = THREE.MathUtils.radToDeg(normalizedRotation);
      const left = 131;
      const right = 51;
      setVisible(!(rotationDegrees >= right && rotationDegrees <= left));
    }
  });

  return (
    <group {...props} ref={patrickStarRef} visible={visible}>
      <primitive object={scene} />
    </group>
  );
};

export default PatrickStar;
