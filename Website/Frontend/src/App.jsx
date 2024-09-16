import { useState } from 'react'
import './App.css'

import { Outlet, Link } from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'
import CategoryInfo from './components/CategoryInfo.jsx'
import RightCardInfo from "./components/Card/RightCardInfo.jsx"
import LeftCardInfo from "./components/Card/LeftCardInfo.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <Outlet /> */}
      <main>
        <HeroSection />
        {/* error <RightCardInfo /> */}
        <CategoryInfo />
        <RightCardInfo />
        <LeftCardInfo />
      </main>
      <Footer />
    </>
  )
}

export default App
