/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Star(props: JSX.IntrinsicElements['mesh']) {
  // This mesherence will give us direct access to the THREE.Mesh object
  const isObjAdded = useRef(false)
  const mesh = useRef<THREE.Mesh>(null!)
  const scene = useRef<THREE.Scene>(null!)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.003
    mesh.current.rotation.y += 0.003
  //     for (var i=0; i<mesh.current.geometry.vertices.length; i++) {
  //   var v = mesh.current.geometry.vertices[i];
  //               v.normalize().multiplyScalar(0.015*noise.simplex3(v.x*2+Date.now()*0.001, v.y*2, v.z*2)+1);
  // }
  // mesh.current.geometry.computeVertexNormals();
  // mesh.current.geometry.normalsNeedUpdate = true;
  // mesh.current.geometry.verticesNeedUpdate = true;
  })
  
  return (
    <mesh
      {...props}
      ref={mesh}>
      <sphereGeometry args={[1, 64, 64]}  />
      <meshPhongMaterial specular={0xC629C8} shininess={2000} wireframe />
    </mesh>
  )
}