import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Vector3 } from "three";

// @ts-ignore
import spongebobScene from "../assets/3d/spongebob.glb";

interface SpongebobProps extends GroupProps {
    isRotating: boolean;
    position: Vector3;
    rotation: THREE.Euler;
    scale: Vector3;
    houseRotation: number;
}

const Spongebob = ({ houseRotation, ...props }: SpongebobProps) => {
    const { scene } = useGLTF(spongebobScene);
    const spongebobRef = useRef<THREE.Group>(null!);
    const [visible, setVisible] = useState(true);

    useFrame(({ clock }) => {
        if (spongebobRef.current) {
            const time = clock.elapsedTime;

            const initialY = props.position.y;
            spongebobRef.current.position.y = initialY + Math.sin(time * 2) * 0.1;

            const doorDistance = 1.6;
            const doorAngle = Math.PI - houseRotation;
            const doorX = Math.cos(doorAngle) * doorDistance;
            const doorZ = Math.sin(doorAngle) * doorDistance;

            const wanderRadius = 0.3;
            const wanderSpeed = 0.3;
            const wanderAngle = time * wanderSpeed;
            const wanderX = Math.cos(wanderAngle) * wanderRadius;
            const wanderZ = Math.sin(wanderAngle) * wanderRadius;

            spongebobRef.current.position.x = doorX + wanderX;
            spongebobRef.current.position.z = doorZ + wanderZ;

            spongebobRef.current.rotation.y = houseRotation + Math.atan2(wanderZ, wanderX) + Math.PI;

            const normalizedRotation = ((houseRotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            const rotationDegrees = THREE.MathUtils.radToDeg(normalizedRotation);
            setVisible(!(rotationDegrees >= 250 && rotationDegrees <= 321));
        }
    });

    return (
        <group {...props} ref={spongebobRef} visible={visible}>
            <primitive object={scene} />
        </group>
    );
};

export default Spongebob;
