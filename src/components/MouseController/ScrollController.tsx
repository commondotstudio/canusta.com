
import { useEffect } from 'react';
import useAppControllerStore from '@/utils/app-controller-store';

export default function ScrollController() {
  
  const { setScrollY } = useAppControllerStore();

  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    return () => {
      if (!window) return;
      window.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    };
  }, []);
  
  return (
    <>
    </>
  );
}
