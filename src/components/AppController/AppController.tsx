import useMouseStore from '@/utils/app-controller-store';
import { useEffect } from 'react';
import useAppControllerStore from '@/utils/app-controller-store';

export default function AppController() {
    const { setWindowSize, windowSize } = useMouseStore();
    const { isWindowWidthMd, setIsWindowWidthMd } = useAppControllerStore();
    const { isMainOverflowHidden, setIsMainOverflowHidden } = useAppControllerStore();
    useEffect(() => {
    if (!window) return;
        window.addEventListener('resize', (e) => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        if (window.innerWidth < 1024) {
          setIsWindowWidthMd(true);
        }else{
          setIsWindowWidthMd(false);
        }
        });
        setTimeout(() => {
           setWindowSize({ width: window.innerWidth, height: window.innerHeight });
       }, 100)
    }, [])
    // useEffect(() => {
    //   if (isMainOverflowHidden) {
    //     document.body.classList.remove("font-light");
    //   }
    // }, [isMainOverflowHidden])
    
  return (
    <></>
  );
}
