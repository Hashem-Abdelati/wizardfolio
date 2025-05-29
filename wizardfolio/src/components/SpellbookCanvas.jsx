import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

export default function SpellbookCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ height: '100vh', width: '100vw' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />

      {/* Placeholder for 3D model */}
      <mesh>
        <boxGeometry args={[2, 0.2, 2]} />
        <meshStandardMaterial color="goldenrod" />
      </mesh>

      {/* Controls */}
      <OrbitControls />
      <Environment preset="sunset" />
    </Canvas>
  )
}
