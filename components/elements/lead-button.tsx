import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import { cn } from '@/~lib/cn'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

/**
 * @description Important buttons like "Connect", "Mint"
 * @returns An effectful button
 */
const LeadButton = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
   return (
      <button
         {...props}
         ref={ref}
         className={cn(
            'w-fit rounded-[10px] bg-white px-[95px] py-4 text-xl font-medium leading-[22px] tracking-wider text-black transition duration-200 ease-out hover:shadow-[0px_0px_10px_2px_rgba(0,163,255,1)]',
            props.className,
         )}
      />
   )
})

LeadButton.displayName = 'LeadButton'

export default LeadButton
