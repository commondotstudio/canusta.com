import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import { cn } from '@/~lib/cn'
import { Link, LinkProps } from 'react-scroll'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export type ScrollableButtonProps = ButtonProps &
   ScrollProps & {
      to?: string
   }

// FIXME: fix type error for `ref`
const NavButton = forwardRef((props: ScrollableButtonProps, ref: ForwardedRef<LinkProps>) => {
   return (
      <Link
         {...props} // @ts-ignore
         ref={ref}
         to={props.to || ''}
         smooth={props.smooth || true}
         className={cn(
            'flex w-fit items-center',
            'cursor-pointer text-title font-semibold leading-6.5 tracking-title',
            'w-fit bg-black/100 p-2 backdrop-blur-md transition duration-500 hover:bg-white hover:text-black',
            props.className,
         )}
      />
   )
})

NavButton.displayName = 'NavButton'

export default NavButton

export interface ScrollProps {
   activeClass?: string
   activeStyle?: React.CSSProperties
   to?: string
   containerId?: string
   spy?: boolean
   hashSpy?: boolean
   smooth?: boolean
   offset?: number
   duration?: number | ((scrollDistanceInPx: number) => number)
   delay?: number
   isDynamic?: boolean
   onSetActive?: (to: string) => void
   onSetInactive?: () => void
   ignoreCancelEvents?: boolean
   horizontal?: boolean
   spyThrottle?: number
}
