import {useGLTF} from '@react-three/drei';
import React, {useEffect, useRef} from 'react';
import {GroupProps, useFrame, useThree} from "@react-three/fiber";
import {Group} from 'three';

// @ts-ignore
import seeHouseScene from '../assets/3d/sea_house.glb';

interface SeeHouseProps extends GroupProps {
    isRotating: boolean;
    setIsRotating: (rotating: boolean) => void;
    currentFocusPoint: number;
    setCurrentStage: React.Dispatch<React.SetStateAction<number>>;
}

const SeeHouse: React.FC<SeeHouseProps> = ({isRotating, setIsRotating, ...props}) => {
    const {nodes, materials} = useGLTF(seeHouseScene);
    const {gl, viewport} = useThree();

    const seeHouseRef = useRef<Group>(null);
    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(true);

        lastX.current = event.touches ? event.touches[0].clientX : event.clientX;
    };

    const handlePointerUp = (event: { stopPropagation: () => void; preventDefault: () => void; }) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(false);
    };

    const handlePointerMove = (event: any) => {
        event.stopPropagation();
        event.preventDefault();

        if (isRotating && seeHouseRef.current) {
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;
            const delta = (clientX - lastX.current) / viewport.width;

            seeHouseRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);

        // Remove event listeners when component unmounts
        return () => {
            canvas.removeEventListener("pointerdown", handlePointerDown);
            canvas.removeEventListener("pointerup", handlePointerUp);
            canvas.removeEventListener("pointermove", handlePointerMove);
        };
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    useFrame(() => {
        if (seeHouseRef.current) {
            if (!isRotating) {
                rotationSpeed.current *= dampingFactor;

                // Stop rotation when speed is very small
                if (Math.abs(rotationSpeed.current) < 0.001) {
                    rotationSpeed.current = 0;
                }

                seeHouseRef.current.rotation.y += rotationSpeed.current;
            } else {
                const rotation = seeHouseRef.current.rotation.y;
                const normalizedRotation =
                    ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

                switch (true) {
                    case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                        props.setCurrentStage(4);
                        break;
                    case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                        props.setCurrentStage(3);
                        break;
                    case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                        props.setCurrentStage(2);
                        break;
                    case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                        props.setCurrentStage(1);
                        break;
                    default:
                        props.setCurrentStage(-1);
                }
            }
        }
    });

    return (
        <group ref={seeHouseRef} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials['11112_sheet_Material__25']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials['11112_sheet_Material__25']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials['11112_sheet_Material__37']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials['11112_sheet_Material__37']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials['default']}
                />
            </group>
        </group>
    );
};

export default SeeHouse;
