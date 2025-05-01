import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useMediaQuery } from '@mui/material';

const Computers = ({ isMobile }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf');
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003;
        }
    });

    return (
        <mesh ref={meshRef}>
            <primitive
                scale={isMobile ? 0.6 : 0.8}
                object={computer.scene}
                position={[0, -2.8, 0]}
            />
        </mesh>
    );
};

const Controls = () => {
    const { camera, gl } = useThree();
    return (
        <OrbitControls
            args={[camera, gl.domElement]}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
        />
    );
};

const ComputersCanvas = () => {
    const matches = useMediaQuery('(max-width:700px)');
    console.log('Mobile:', matches);

    return (
        <Canvas
            frameloop="always"
            camera={
                !matches
                    ? { position: [15.5, 0, 9.2], fov: 21 }
                    : { position: [15.5, 0, 9.2], fov: 18.8 }
            }
            gl={{ preserveDrawingBuffer: true }}
            className='rounded-md'
        >
            <Suspense fallback={null}>
                <Controls />
                <Computers isMobile={matches} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

// GLTF'yi önceden yükle
useGLTF.preload('./desktop_pc/scene.gltf');

export default ComputersCanvas;
