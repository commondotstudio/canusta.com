
import { useEffect } from 'react';
import useMouseStore from '@/utils/mouse-store';
import useScreenSize from '@/utils/app-controller-store';
import { calculateCenteredX, calculateCenteredY } from '@/utils/utils-tsx';

export default function MouseController() {
  const { setMouseCoordinates, mouseCoordinates } = useMouseStore();
  const { setWindowSize, windowSize } = useScreenSize();
  
  useEffect(() => {
    if (!window) return;
    window.addEventListener('mousemove', (e) => {
      if (windowSize.width === 0) {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      }

      setMouseCoordinates({ 
        x: e.clientX, 
        y: e.clientY, 
        centeredx: calculateCenteredX(e.clientX), 
        centeredy: calculateCenteredY(e.clientY) 
      });
    });
  }, []);
  
  return (
    <>
    </>
  );
}
