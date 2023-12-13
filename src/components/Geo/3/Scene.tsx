import {
  Icosahedron,
  MeshDistortMaterial,
  Box,
} from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import SphereAnimation from './Controllers/SphereController'
import BackgroundAnimation from "./Controllers/BackgroundController"
import { data } from "./data";
import useAppControllerStore from '@/utils/app-controller-store';
import { useFrame } from "react-three-fiber"

export function Scene(
) {

    const sphereRef = useRef<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap> | undefined>();
    const boxRef = useRef<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap> | undefined>();
    const [sphereMaterial, setSphereMaterial] = useState<
    JSX.IntrinsicElements["distortMaterialImpl"] | null
    >(null);
    const light = useRef<THREE.DirectionalLight | null>();
    const scrollY = useAppControllerStore((state) => state.scrollY);

    const [boxMaterial, setBoxMaterial] = useState<
      THREE.MeshBasicMaterial | null
    >(new THREE.MeshBasicMaterial({ 
      color: "#000", 
      side: THREE.DoubleSide, 
      transparent: false
    }));

  return (
    <>
      <MeshDistortMaterial
        ref={setSphereMaterial}
        color={"#ffffff"}
        roughness={1.0}
        metalness={1}
        clearcoat={1}
        clearcoatRoughness={10}
        radius={data.sphere.radius}
        distort={data.sphere.distort}
        speed={0.2}
        specularColor={"#fffFFF"}
      />
      <Icosahedron
        args={[1, 12]}
        ref={sphereRef as React.MutableRefObject<THREE.Mesh | null>}
        material={sphereMaterial as THREE.Material | THREE.Material[]}
        position={[0, 0, 0]}
      />
      <Box
        args={[200, 200, 200]} 
        position={[0, 0, 0]} 
        ref={boxRef as React.MutableRefObject<THREE.Mesh | null>}
        material={boxMaterial as THREE.MeshBasicMaterial | THREE.MeshBasicMaterial[]}
      />
    <directionalLight
        ref={light as React.MutableRefObject<THREE.DirectionalLight | null>}
        intensity={0}
        position={[0, 0, 10]}
        color={"#ffffff"}
      />
    <SphereAnimation sphereRef={sphereRef} />
    <BackgroundAnimation boxRef={boxRef} lightRef={light} />
    </>
  );
}
