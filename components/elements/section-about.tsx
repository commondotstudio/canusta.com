import React from 'react'
import Link from 'next/link'

export default function AboutSection({
   children,
   more,
}: {
   children: string
   /**
    * "Read More" link
    * @param href - href of the link
    * @param text - text of the link
    * @returns - link with text
    */
   more: {
      href: string
      text: string
   }
}) {
   return (
      <div className="relative flex w-full max-w-[312px] flex-col items-center">
         <p className="text-center text-xl font-normal leading-[22px] tracking-wider text-white">{children}</p>
         <Link href={more.href} className="text-center text-xl leading-[22px] tracking-wider text-white underline">
            {more.text}
         </Link>
      </div>
   )
}
