import React, { useCallback } from 'react'
import NavButton from '@/elements/nav-button'
import Space from '@/elements/space'
import SvgHamburger from '@/elements/svg'
import { cn } from '@/~lib/cn'
import { hamburgerNav } from '@/~utils/navigation'
import { hamburgerMenuStore } from '@/~utils/stores/hamburger-menu'
import { kgid } from 'kgid'
import ReactDOM from 'react-dom'

export default function HamburgerMenu() {
   const { isOpened } = hamburgerMenuStore((state) => state)

   return (
      <div className="visible md:invisible">
         {React.useMemo(() => {
            if (isOpened) {
               return <FullScreenMobileMenu />
            } else {
               return <HamburgerMenuButton />
            }
         }, [isOpened])}
      </div>
   )
}

function HamburgerMenuButton() {
   const { isOpened, setIsOpened } = hamburgerMenuStore((state) => state)

   const handleClick = useCallback(() => {
      setIsOpened(!isOpened)
   }, [isOpened, setIsOpened])

   return (
      <button
         onClick={handleClick}
         className={cn('fixed bottom-18 right-0 z-30', 'rounded-xs p-[27px] backdrop-blur-jul')}
         style={{
            background: 'rgba(0, 0, 0, 0.25)',
            boxShadow: '0px 0px 20px #000000',
         }}
      >
         <SvgHamburger />
      </button>
   )
}

function FullScreenMobileMenu() {
   const { setIsOpened } = hamburgerMenuStore((state) => state)
   const handleClose = useCallback(() => {
      setIsOpened(false)
   }, [])

   return ReactDOM.createPortal(
      <div
         className={cn(
            'fixed inset-0 z-40 h-screen w-screen',
            'flex flex-col items-center justify-start',
            'text-white backdrop-blur-jul',
            'px-[35px] py-7.5',
         )}
         style={{
            background: 'rgba(0, 0, 0, 0.25)',
         }}
      >
         <button
            onClick={handleClose}
            className={cn(
               'flex w-fit items-center',
               'cursor-pointer text-title font-semibold leading-6.5 tracking-title',
               'w-fit bg-black/100 p-2 backdrop-blur-md transition duration-500 hover:bg-white hover:text-black',
            )}
         >
            CLOSE
         </button>
         <Space height={50} />
         <div className="flex flex-col items-center gap-7.5">
            {hamburgerNav.map((item) => {
               return (
                  <NavButton key={kgid()} to={item.to}>
                     {item.text}
                  </NavButton>
               )
            })}
         </div>
      </div>,
      document.body, // Or any other element you want to append the menu to
   )
}
