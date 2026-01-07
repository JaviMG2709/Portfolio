// src/components/RobotBackground.jsx
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function SpinningCube() {
    const ref = useRef()
    useFrame((_, d) => {
        if (ref.current) {
            ref.current.rotation.y += d * 0.6
            ref.current.rotation.x += d * 0.3
        }
    })
    return (
        <mesh ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#4ade80" />
        </mesh>
    )
}

export default function RobotBackground() {
    return (
        <Canvas
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
            className="-z-10"
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 3], fov: 45 }}
            // Fondo NEGRO directo del renderer:
            gl={{ antialias: true }}
            onCreated={({ gl, scene }) => {
                gl.setClearColor('#000000') // negro
            }}
        >
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 3, 3]} intensity={0.8} />
            <SpinningCube />
        </Canvas>
    )
}
