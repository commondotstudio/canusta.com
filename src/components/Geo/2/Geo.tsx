import * as React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { extend, createRoot, events } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Star from './Star'

export default function Geo() {
  return (
    <div className='fixed w-full h-screen z-0'>
      <Canvas shadows camera={{ position: [8,1.5,8], fov:25 }} className='z-0' >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Star />
        {/* <Box position={[1.2, 0, 0]} /> */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  )
}