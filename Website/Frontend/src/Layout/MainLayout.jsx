import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import { Toaster } from 'react-hot-toast'



function MainLayout() {
    return (
        < >
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout