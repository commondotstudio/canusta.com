import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { kgid } from 'kgid'

export default function Accordions({
   items,
}: {
   items: {
      title: string
      content: React.ReactNode
   }[]
}) {
   return (
      <Accordion.Root className="mx-auto max-w-[352px] md:max-w-[393px]" type="single" collapsible>
         <div className="border-b border-[#FFFFFF] border-opacity-30" />
         {items.map((item) => {
            return (
               <Accordion.AccordionItem
                  key={kgid()}
                  value={item.title}
                  className=" border-b border-[#FFFFFF] border-opacity-30 px-4 md:px-10"
               >
                  <Accordion.AccordionTrigger className="flex w-full flex-row items-center justify-between gap-[21px] py-4 [&[data-state=open]>svg]:rotate-180">
                     <h2 className="max-w-[271px] text-left text-xl leading-[22px] tracking-wider">{item.title}</h2>
                     <AccordionArrow />
                  </Accordion.AccordionTrigger>
                  <Accordion.AccordionContent className="overflow-hidden pb-4 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                     {item.content}
                  </Accordion.AccordionContent>
               </Accordion.AccordionItem>
            )
         })}
      </Accordion.Root>
   )
}

function AccordionArrow() {
   return (
      <svg width={24} height={13} fill="none" className="transition-transform duration-200">
         <path stroke="#fff" d="M23 1 12 12 1 1" />
      </svg>
   )
}
