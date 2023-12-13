import React, { useEffect } from 'react';
import useStore from '@/utils/geo-3-store';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useState } from 'react';
import { data } from '../data';
import { DepthOfFieldEffect } from 'postprocessing';
import useAppControllerStore from '@/utils/app-controller-store';

interface CameraAnimationProps {
  cameraRef: React.MutableRefObject<THREE.PerspectiveCamera | null | undefined>;
  dopRef: React.MutableRefObject<DepthOfFieldEffect | null | undefined>
}

const CameraAnimation: React.FC<CameraAnimationProps> = ({ cameraRef, dopRef }) => {

  const animationLength = 2000;
  const scrollY = useAppControllerStore((state) => state.scrollY);
  const [isAnimating, setIsAnimating] = useState(false)
  const { geoTheme } = useStore();
  const { cameraPosition } = useStore()

  const moveCameraCloser = () => {
      if(!cameraRef.current?.position.z) return
      const currentZ = cameraRef.current?.position.z;
      const targetZ = data.camera.position.z.close;
      const delta = targetZ - currentZ;
      const speed = 0.1;
      const nextZ = currentZ + delta * speed;
      cameraRef.current?.position.set(0, 0, nextZ);
    };
  
  const moveCameraAway = () => {
    if(!cameraRef.current?.position.z) return
    const currentZ = cameraRef.current?.position.z;
    const targetZ = data.camera.position.z.far;
    const delta = targetZ - currentZ;
    const speed = 0.1;
    const nextZ = currentZ + delta * speed;
    cameraRef.current?.position.set(0, 0, nextZ);
  };

  const moveCameraHidden = () => {
      if(!cameraRef.current?.position.z) return
      const currentZ = cameraRef.current?.position.z;
      const targetZ = 3;
      const delta = targetZ - currentZ;
      const speed = 0.1;
      const nextZ = currentZ + delta * speed;
      const currentY = cameraRef.current?.position.y;
      const targetY = 3;
      const deltaY = targetY - currentY;
      const speedY = 0.1;
      const nextY = currentY + deltaY * speedY;
      cameraRef.current?.position.set(nextY, nextY, nextZ);
  }

  useEffect(() => {
    if (!window) return;
    strartAnimation();
  }, [geoTheme])
  
 const strartAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => { setIsAnimating(false) }, animationLength)
  }

  useFrame(({ clock }) => {
    if (!cameraRef || !cameraRef.current) return;

    if(cameraPosition==='farToClose'){
      const currentZ = cameraRef.current?.position.z;
      const targetZ = data.camera.position.z.homeAnmiationState2 + scrollY * -0.001;
      const delta = targetZ - currentZ;
      const speed = 0.1;
      const nextZ = currentZ + delta * speed;
      cameraRef.current?.position.set(0, 0, nextZ);
    }

    // Animation logic for the box
    if (!isAnimating) return;

     if (cameraPosition === "close") {
        moveCameraCloser();
      }else if(cameraPosition === "farToClose"){
        moveCameraAway();
      }else if(cameraPosition === "hide"){
        moveCameraHidden();
      }

  });
  
  return null;
};

export default CameraAnimation;
