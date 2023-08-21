import { ReactNode } from 'react'
import { NextComponentType, NextLayoutComponentType, NextPageContext } from 'next'
import { AppProps } from 'next/app'

declare module 'next' {
   type NextLayoutComponentType<P = {}> = NextComponentType<NextPageContext, unknown, P> & {
      getLayout?: (page: ReactNode) => ReactNode
   }
}

declare module 'next/app' {
   type AppLayoutProps<P = {}> = AppProps & {
      Component: NextLayoutComponentType
   }
}
