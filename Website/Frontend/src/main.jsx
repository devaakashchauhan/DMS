import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Disaster from './pages/Disaster.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SpecificDisaster from './pages/SpecificDisaster.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >

      <Route path="" element={<Home />} />
      <Route path="disasters/" element={<Disaster />} >
        <Route path='details:id/' element={<SpecificDisaster />} />
      </Route>


      <Route path="contact/" element={<Contact />} />
      <Route path="dashboard/" element={<Dashboard />} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
