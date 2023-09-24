import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useMediaQuery } from '@mui/material';

const Computers = ({ isMobile }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf');
    return (
        <mesh>
            <primitive
                scale={isMobile ? 0.6 : 0.8}
                object={computer.scene}
                position={[0, -2.8, 0]}
                rotation={[0.0, Math.PI / 2, 0]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const matches = useMediaQuery('(max-width:700px)');
    console.log(matches)
    return (
        <Canvas
            frameloop="always"
            camera={!matches ? { position: [15.5, 0, 9.2], fov: 21 } :{ position: [15.5, 0, 9.2], fov: 18.8 } }
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense>
                <OrbitControls
                    enableZoom={false}
                    defa
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={matches} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
