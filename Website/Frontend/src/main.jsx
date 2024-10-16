import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from 'react-hot-toast';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Disaster from './pages/Disaster.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SpecificDisaster from './pages/SpecificDisaster.jsx';
import AdminDisaster from './pages/AdminDisaster.jsx';
import AdminDisasterDetailCom from './components/AdminDisasterDetailCom.jsx';
import DisasterReport from './pages/DisasterReport.jsx';
import Login from './pages/Login.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import DashboardLayout from './Layout/DashboardLayout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements([

    <Route path="/" element={<MainLayout />} >
      <Route path="" element={<Home />} />
      <Route path="disasters/" element={<Disaster />} />
      <Route path="carddetails/:id" element={<SpecificDisaster />} />
      <Route path="contact/" element={<Contact />} />
      <Route path="report/" element={<DisasterReport />} />
      <Route path="adminlogin/" element={<Login />} />
    </Route>,

    <Route path="dashboard/" element={<DashboardLayout />} >
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
