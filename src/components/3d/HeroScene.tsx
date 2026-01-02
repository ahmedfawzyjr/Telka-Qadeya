'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
    const ref = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000; i++) {
            const radius = Math.random() * 10 + 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.02;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    return (
        <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#009639"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

function GlowingOrb() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
            meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
            meshRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    return (
        <group>
            {/* Core orb */}
            <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
                <meshStandardMaterial
                    color="#009639"
                    emissive="#009639"
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.8}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>

            {/* Outer glow */}
            <Sphere args={[1.8, 32, 32]} position={[0, 0, 0]}>
                <meshBasicMaterial
                    color="#009639"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </Sphere>

            {/* Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2.5, 0.02, 16, 100]} />
                <meshBasicMaterial color="#EE2A35" transparent opacity={0.6} />
            </mesh>
        </group>
    );
}

function FloatingShapes() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Small floating spheres */}
            {[...Array(8)].map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        Math.cos((i / 8) * Math.PI * 2) * 4,
                        Math.sin(i * 0.5) * 0.5,
                        Math.sin((i / 8) * Math.PI * 2) * 4,
                    ]}
                >
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshBasicMaterial
                        color={i % 2 === 0 ? "#009639" : "#EE2A35"}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
            ))}
        </group>
    );
}

export function HeroScene() {
    return (
        <div className="canvas-container pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                dpr={[1, 2]}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#009639" />

                <ParticleField />
                <GlowingOrb />
                <FloatingShapes />
            </Canvas>
        </div>
    );
}
