import {Suspense, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {HomeInfo, Loader} from '../components';
import {SeeHouse, Sky} from '../models';
import {Vector3} from 'three';

const Home = () => {
    const fullSize = 'w-full h-screen';
    const MOBILE_BREAKPOINT = 768;
    const MOBILE_SCALE: Vector3 = new Vector3(0.8, 0.8, 0.8);
    const DESKTOP_SCALE: Vector3 = new Vector3(1, 1, 1);
    const POSITION: Vector3 = new Vector3(0, -100, -350);

    const adjustSeaHouseForScreenSize = (): [Vector3, Vector3] => {
        const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
        const scale: Vector3 = isMobile ? MOBILE_SCALE : DESKTOP_SCALE;
        return [POSITION, scale];
    };

    const [seaHousePosition, seaHouseScale] = adjustSeaHouseForScreenSize();
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);

    return (
        <section className={`${fullSize} relative`}>
            <div className={'absolute top-28 left-0 right-0 z-10 flex items-center'}>
                {currentStage && <HomeInfo currentStage={currentStage}/>}
            </div>
            <Canvas
                className={`${fullSize} bg-transparent  ${
                    isRotating ? "cursor-grabbing" : "cursor-grab"
                }`}
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[1, 1, 1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <pointLight position={[10, 5, 10]} intensity={2}/>
                    <spotLight
                        position={[0, 50, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />
                    <hemisphereLight
                        color="#b1e1ff"
                        groundColor="#000000"
                        intensity={1}
                    />
                    <Sky isRotating={isRotating}/>
                    <SeeHouse
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        currentFocusPoint={currentStage}
                        setCurrentStage={setCurrentStage}
                        position={seaHousePosition}
                        scale={seaHouseScale}
                        rotation={[0.1, 4.7077, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
