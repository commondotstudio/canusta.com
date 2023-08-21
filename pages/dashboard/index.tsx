import React from 'react'
import DashboardLayout from '@/~components/layouts/dashboard'

export default function Dashboard() {
   return <div>This is a dashboard without problems.</div>
}

Dashboard.getLayout = (page: JSX.Element) => <DashboardLayout>{page}</DashboardLayout>
