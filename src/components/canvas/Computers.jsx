import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { HemisphereLight, PointLight } from 'three';

const Computers = () => {
    const computer = useGLTF('./desktop_pc/scene.gltf');
    return (
        <mesh>
            <primitive
                scale={0.8}
                object={computer.scene}
                position={[0,-2.8,0]}
                rotation={[0.0 , Math.PI / 2 , 0]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop="always"
            camera={{ position: [0.5,-10,9.2], fov: 30}}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense>
                <OrbitControls
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
