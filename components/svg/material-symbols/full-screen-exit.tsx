import * as React from 'react'
import { SVGProps } from 'react'

const FullScreenExit = (props: SVGProps<SVGSVGElement>) => (
   <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 96 960 960" {...props}>
      <path d="M333 856V723H200v-60h193v193h-60Zm234 0V663h193v60H627v133h-60ZM200 489v-60h133V296h60v193H200Zm367 0V296h60v133h133v60H567Z" />
   </svg>
)
export default FullScreenExit
