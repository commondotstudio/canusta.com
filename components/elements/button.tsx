import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import { cn } from '@/~lib/cn'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

/**
 * For small, basic buttons like "Read More"
 */
const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
   return (
      <button
         {...props}
         ref={ref}
         className={cn(
            'w-fit rounded-[4px] border border-white px-8 py-2 text-sm font-normal leading-[22px] tracking-wider text-white',
            props.className,
         )}
      />
   )
})

Button.displayName = 'Button'

export default Button
