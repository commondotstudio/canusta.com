import { ReactNode } from 'react'
import type { AppLayoutProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'
import Inspect from 'inspx'

import '../public/styles/globals.css'

function CanUstaCom({ Component, pageProps }: AppLayoutProps) {
   const getLayout = Component.getLayout || ((page: ReactNode) => page)

   return (
      <Inspect>
         <main className={`${gridnikFont.variable} font-gridnik`}>
            <Head>
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1"
               />
               <meta
                  name="description"
                  content="Can Usta"
                  key="desc"
               />
               <meta property="og:title" content="Can Usta" />
               <meta
                  property="og:description"
                  content="Can Usta "
               />
               <meta property="og:image" content="/images/og-image.webp" />
               <link rel="icon" href="/favicon.ico" />
            </Head>
            {getLayout(<Component {...pageProps} />)}
         </main>
      </Inspect>
   )
}

export default CanUstaCom

const gridnikFont = localFont({
   variable: '--font-gridnik',
   weight: '100 400 600 1000',
   src: [
      {
         path: './fonts/Black.woff2',
         weight: '1000',
         style: 'normal',
      },
      {
         path: './fonts/Medium.woff2',
         weight: '600',
         style: 'normal',
      },
      {
         path: './fonts/Book.woff2',
         weight: '400',
         style: 'normal',
      },
      {
         path: './fonts/Light.woff2',
         weight: '100',
         style: 'normal',
      },
   ],
})