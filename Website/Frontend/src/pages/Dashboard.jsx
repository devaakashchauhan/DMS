import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64">
        <Outlet />
      </div >

    </>
  )
}

export default Dashboard