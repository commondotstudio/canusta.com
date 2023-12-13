import React, { useEffect } from 'react';
import useStore from '@/utils/geo-3-store';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useState } from 'react';
import { data } from '../data';
import useAppControllerStore from '@/utils/app-controller-store';

interface LightAnimationProps {
  light1: React.MutableRefObject<THREE.DirectionalLight | null | undefined>
  light2ref: React.MutableRefObject<THREE.DirectionalLight | null | undefined>
  light3ref: React.MutableRefObject<THREE.DirectionalLight | null | undefined>
}

const LightAnimation: React.FC<LightAnimationProps> = ({ light1, light2ref, light3ref }) => {

  const animationLength = 2000;
  const { websiteBackgroundState } = useStore();
  const scrollY = useAppControllerStore((state) => state.scrollY);
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentBackgroundState, setCurrentBackgroundState] = useState(websiteBackgroundState)

  useEffect(() => {
    if (!window) return;
    if(websiteBackgroundState === currentBackgroundState){
        return;
    }
    setCurrentBackgroundState(websiteBackgroundState);
    strartAnimation();
  }, [websiteBackgroundState])
  
 const strartAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => { setIsAnimating(false) }, animationLength)
  }

  useFrame(({ clock }) => {
    if (!light1 || !light1.current) return;

    // light1.current?.position.set(scrollY/100, 10, -4);
    // light2ref.current?.position.set(-10, scrollY/-100, -10);

    // Animation logic for the box
    if (!isAnimating) return;

    

  });
  
  return null;
};

export default LightAnimation;