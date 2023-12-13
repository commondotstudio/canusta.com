import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useMouseStore from '@/utils/mouse-store';
import useAppControllerStore from '@/utils/app-controller-store';
import useStore from '@/utils/geo-3-store';

interface SphereAnimationProps {
  sphereRef: React.MutableRefObject<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>> | undefined>;
}

const SphereAnimation: React.FC<SphereAnimationProps> = ({ sphereRef }) => {
    const { mouseCoordinates } = useMouseStore();
    const scrollY = useAppControllerStore((state) => state.scrollY);
    const [ currentLerpedScrollY, setCurrentLerpedScrollY ] = React.useState(0)
    const { objectMouseInteraction } = useStore();

  useFrame(() => {
    if (!sphereRef || !sphereRef.current) return;

    if (objectMouseInteraction === 'full') {
      sphereRef.current.rotation.y = THREE.MathUtils.lerp(
      sphereRef.current.rotation.y,
      (mouseCoordinates.x / -2000) * Math.PI,
      0.01
    );
    sphereRef.current.rotation.x = THREE.MathUtils.lerp(
      sphereRef.current.rotation.x,
      (mouseCoordinates.y / -2000) * Math.PI,
      0.01
    );

    const rotationZ = THREE.MathUtils.lerp(
      sphereRef.current.rotation.x,
      (scrollY/30) * Math.PI,
      0.008
    );

    sphereRef.current.rotation.z = rotationZ

    sphereRef.current.position.x = THREE.MathUtils.lerp(
      sphereRef.current.position.x,
      mouseCoordinates.centeredx / 300,
      0.0004
    );

    sphereRef.current.position.y = THREE.MathUtils.lerp(
      sphereRef.current.position.y,
      mouseCoordinates.centeredy / -1000,
      0.004
    );

    }else if(objectMouseInteraction === 'half'){

       sphereRef.current.rotation.y = THREE.MathUtils.lerp(
      sphereRef.current.rotation.y,
      (mouseCoordinates.x / -8000) * Math.PI,
      0.01
    );
    sphereRef.current.rotation.x = THREE.MathUtils.lerp(
      sphereRef.current.rotation.x,
      (mouseCoordinates.y / -8000) * Math.PI,
      0.01
    );

    sphereRef.current.rotation.z = THREE.MathUtils.lerp(
      sphereRef.current.rotation.x,
      (scrollY/100) * Math.PI,
      0.01
    );

    sphereRef.current.position.x = THREE.MathUtils.lerp(
      sphereRef.current.position.x,
      mouseCoordinates.centeredx / 3000,
      0.004
    );

    sphereRef.current.position.y = THREE.MathUtils.lerp(
      sphereRef.current.position.y,
      mouseCoordinates.centeredy / -10000,
      0.004
    );

      }
      else if(objectMouseInteraction === 'none'){

      }

    // sphereRef.current.position.x = 0.2
    // sphereRef.current.position.y = 0.2
    // sphereRef.current.position.z = mouseCoordinates.y / -10 + 10
  });

  return null; // This component doesn't render anything, it's for animation logic only
};

export default SphereAnimation;