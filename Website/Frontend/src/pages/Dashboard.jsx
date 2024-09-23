import React, { useEffect } from 'react'
import { Outlet, redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const baseURL = import.meta.env.VITE_USED_URL
  const apiversion = import.meta.env.VITE_API_VERSION
  const navigate = useNavigate()

  useEffect(() => {

    axios.get(`${baseURL}/${apiversion}/admin/getcurrentadmin`, {
      withCredentials: true  // include cookies in requests
    })
      .then((respone) => {
        // console.log(respone.data.data.username);
        localStorage.setItem("role", respone.data.data.username)
      })
      .catch((error) => {
        console.log("Error :- ", error);
        navigate("/adminlogin")
      })
  }, [])


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