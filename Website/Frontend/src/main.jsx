import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Disaster from './pages/Disaster.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SpecificDisaster from './pages/SpecificDisaster.jsx';
import AdminDisaster from './pages/AdminDisaster.jsx';
import AdminDisasterDetailCom from './components/AdminDisasterDetailCom.jsx';
import DisasterReport from './pages/DisasterReport.jsx';

const router = createBrowserRouter(
  createRoutesFromElements([

    <Route path="/" element={<App />} >
      <Route path="" element={<Home />} />
      <Route path="disasters/" element={<Disaster />} />
      <Route path="carddetails/:id" element={<SpecificDisaster />} />
      <Route path="contact/" element={<Contact />} />
      <Route path="report/" element={<DisasterReport />} />
    </Route>,

    <Route path="dashboard/" element={<Dashboard />} >
      <Route path='disaster/' element={<AdminDisaster />} />
      <Route path='details/:id' element={<AdminDisasterDetailCom />} />
    </Route >
  ]

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
