import React from 'react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

class Document extends NextDocument {
   render() {
      return (
         <Html lang="en">
            <Head />

            <body className="no-scrollbar">
               <Script id="google-analytics" strategy="afterInteractive">
                  {`
                     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NXP5NZF');
                  `}
               </Script>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default Document
