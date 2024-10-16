import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [dashboardShow, setDashboardShow] = useState(false)

  // useEffect(() => {
  //   if (localStorage.getItem("role")) {
  //     setDashboardShow(true)
  //   }
  // }, [localStorage.getItem("role")])

  return (
    <>
      <nav className=" top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to={"/"}
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Disaster
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="report/"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500"
                >
                  Report
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="disasters/"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500"
                >
                  Disaster
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="contact/"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500"
                >
                  Contact
                </Link>
              </li>
              {localStorage.getItem("role") ?
                <li className="flex items-center">
                  <Link
                    to="/dashboard/disaster/"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500"
                  >
                    Dashboard
                  </Link>
                </li> : <li className="flex items-center">
                  <Link
                    to="adminlogin/"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500"
                  >
                    Login
                  </Link>
                </li>
              }

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar