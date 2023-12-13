import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { geoStates } from '../data';
import { colorLerp } from '../functions';
import { useState } from 'react';
import useStore from '@/utils/geo-3-store';

interface BackgroundAnimationProps {
  boxRef: React.MutableRefObject<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>> | undefined>;
  lightRef: React.MutableRefObject<THREE.DirectionalLight | null | undefined >
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ boxRef, lightRef }) => {

  const animationLength = 6000;

  const { setWebsiteBackgroundState, websiteBackgroundState } = useStore();
  const { geoStateUpdateTimestamp } = useStore();
  const { geoTheme } = useStore();
  const { geoBackground } = useStore();

  const [isAnimating, setIsAnimating] = useState(false)
  const [currentBackgroundColor, setcurrentBackgroundColor] = useState<THREE.Color>(geoStates.black.bgColor)
  const [newColor, setNewColor] = useState<THREE.Color>(geoStates.black.bgColor)

  const [currentBackgroundState, setCurrentBackgroundState] = useState(websiteBackgroundState)

  const [bgAnimationTimeout, setBgAnimationTimeout] = useState<NodeJS.Timeout | null>(null);


  const startAnimation = () => {
    setIsAnimating(true);
    if (bgAnimationTimeout) clearTimeout(bgAnimationTimeout);
    setBgAnimationTimeout(setTimeout(() => { setIsAnimating(false) }, animationLength))
  }

  useEffect(() => {
    if (!window) return;
    setCurrentBackgroundState(websiteBackgroundState);
    startAnimation();
  }, [websiteBackgroundState])


  useFrame(({ clock }) => {
    if (!boxRef || !boxRef.current) return;
    if (!lightRef || !lightRef.current) return;

    // Animation logic for the box
    if (!isAnimating) return;

    const material = boxRef.current.material as THREE.MeshBasicMaterial;
    if (geoTheme==='customPage') {
      setNewColor(colorLerp(currentBackgroundColor, new THREE.Color(geoBackground), 0.08))
    }else{
      setNewColor(colorLerp(currentBackgroundColor, geoStates[websiteBackgroundState].bgColor, 0.08))
    }
    
    setcurrentBackgroundColor(newColor);
    material.setValues({ color: newColor });

    // LIGHT ANIMATION FOR SPHERE 
    if (websiteBackgroundState === "white") {
      lightRef.current!.intensity = THREE.MathUtils.lerp( lightRef.current!.intensity, 10, 0.05);
    }else if (websiteBackgroundState === "black"){
      lightRef.current!.intensity = THREE.MathUtils.lerp( lightRef.current!.intensity, 0, 0.05);
    }else if (websiteBackgroundState === "color"){
      lightRef.current!.intensity = THREE.MathUtils.lerp( lightRef.current!.intensity, 10, 0.05);
    }

  });

  return (
        <></>
  );
};

export default BackgroundAnimation;