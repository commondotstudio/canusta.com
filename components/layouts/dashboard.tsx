import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <div>I&lsquo;m a layout.</div>
         <div>{children}</div>
      </>
   )
}
