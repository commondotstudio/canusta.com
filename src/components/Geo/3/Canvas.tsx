import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei"
import CameraAnimation from "./Controllers/CameraController";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"
import { data } from "./data";
import { DepthOfFieldEffect } from "postprocessing";
import LightAnimation from "./Controllers/LightController"

export function CanvasObj() {
  const cameraRef = useRef<THREE.PerspectiveCamera | null>()
  const dopRef = useRef<DepthOfFieldEffect | null>()
  const light1 = useRef<THREE.DirectionalLight | null>()
  const light2ref = useRef<THREE.DirectionalLight | null>()
  const light3ref = useRef<THREE.DirectionalLight | null>()
  
  return (
    <>
      <Canvas
        gl={{
          powerPreference: "low-power",
          alpha: false,
          antialias: true,
          stencil: false,
          depth: false,
          toneMappingExposure: 1,
        }}
      >
        <PerspectiveCamera makeDefault position={[0,0,data.camera.position.z.homeAnimationState1]} ref={cameraRef  as React.MutableRefObject<THREE.PerspectiveCamera | null> }  />
        <Scene />
        <directionalLight
          ref={light2ref as React.MutableRefObject<THREE.DirectionalLight | null>}
          intensity={10}
          position={[-10, -0, -10]}
          color={"#8311d5"}
        />
        <directionalLight
          intensity={10}
          position={[10, 0, -10]}
          color={"#8311d5"}
        />
        <directionalLight
          intensity={5}
          position={[0, 10, -10]}
          color={"#121af8"}
        />
        <directionalLight
          intensity={5}
          position={[0, -10, -10]}
          color={"#a70000"}
        />
        <directionalLight
          ref={light1 as React.MutableRefObject<THREE.DirectionalLight | null>}          
          intensity={2}
          position={[-4, 10, -4]}
          color={"#ed7f35"}
        />
        <directionalLight
          ref={light3ref as React.MutableRefObject<THREE.DirectionalLight | null>}          
          intensity={2}
          position={[-4, 10, -4]}
          color={"#9412d1"}
        />
        <CameraAnimation cameraRef={cameraRef} dopRef={dopRef} />
        <LightAnimation light1={light1} light2ref={light2ref} light3ref={light3ref} />  

        {/* <EffectComposer disableNormalPass={true}>
          <DepthOfField
            ref={dopRef as React.MutableRefObject<DepthOfFieldEffect | null>}
            focusDistance={data.depthOfField.focusDistance}
            focalLength={data.depthOfField.focalLength}
            bokehScale={data.depthOfField.bokehScale}
            height={data.depthOfField.height}
            worldFocusRange={data.depthOfField.worldFocusRange}
            worldFocusDistance={data.depthOfField.worldFocusDistance}
          />
        </EffectComposer> */}

        {/* <EffectComposer disableNormalPass={false}> */}
        {/* <DepthOfField
          focusDistance={10}
          focalLength={0.01}
          bokehScale={10}
          height={480}
        /> */}
        {/* <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        /> */}
        {/* <Noise opacity={0.025} /> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={0.9} /> */}
      {/* </EffectComposer> */}
        {/* <directionalLight
          ref={whiteLightRef}
          intensity={4}
          position={[0, 0, 10]}
          color={"#ffffff"}
        /> */}
         {/* <ambientLight intensity={10} /> */}
        {/* <color attach="background" args={[bgColorRef.current]} /> */}
        {/* <light intensity={20} position={[0, 0, 10]} /> */}
        {/* <hemisphereLight intensity={1} skyColor={`0xffffff`} /> */}
        {/* <Suspense fallback={<Html center>Loading.</Html>}>
      </Suspense> */}
        {/* <EffectComposer > */}
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={2.9} height={300} /> */}
        {/* <Noise opacity={0.02} /> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
        {/* </EffectComposer> */}
      </Canvas>
    </>
  );
}
