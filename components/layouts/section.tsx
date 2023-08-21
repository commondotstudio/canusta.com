import React from 'react'
import { cn } from '@/~lib/cn'
import { Element } from 'react-scroll'

export default function Section({
   children,
   classNames,
   name,
}: {
   children: React.ReactNode
   classNames?: string
   name?: string
}) {
   return (
      <Element name={name || ''}>
         <div className={cn('mx-auto box-border w-full max-w-8xl sm:px-7.5', classNames)}>{children}</div>
      </Element>
   )
}
