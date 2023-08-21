import * as React from 'react'
import { SVGProps } from 'react'

const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
   <svg xmlns="http://www.w3.org/2000/svg" width={30} height={21} fill="none" {...props}>
      <path fill="#fff" d="M0 0h30v1H0zM0 10h30v1H0zM0 20h30v1H0z" />
   </svg>
)
export default SvgHamburger
