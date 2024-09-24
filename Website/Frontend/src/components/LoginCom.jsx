import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginCom() {
    const baseURL = import.meta.env.VITE_USED_URL
    const version = import.meta.env.VITE_API_VERSION

    const navigate = useNavigate()

    const [adminInfo, setadminInfo] = useState({
        username: "",
        password: ""
    })
    const [loginButton, setloginButton] = useState(true)

    useEffect(() => {
        if (adminInfo.password.length > 0 && adminInfo.username.length > 0) {
            setloginButton(false)
        }
        else {
            setloginButton(true)
        }
    }, [adminInfo])



    const handelInputChange = (e) => {
        setadminInfo({ ...adminInfo, [e.target.name]: e.target.value });
    }

    const handelRequest = () => {
        axios.post(`${baseURL}/${version}/admin/login`, adminInfo, {
            withCredentials: true  // include cookies in requests
        })
            .then((response) => {
                // console.log(response.data)
                localStorage.setItem("role", response.data.data.username)
                navigate("/dashboard/disaster/")
            })
            .catch((error) => {
                console.log("Error :- ", error);
                localStorage.clear()
            })
    }

    const handelLogin = (e) => {
        e.preventDefault();
        handelRequest();
    }


    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Report Disaster</h6>
                    </div>
                </div>

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>


                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Login Information
                        </h6>
                        <div className="flex">
                            <div className=" w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Username"
                                        name="username"
                                        onChange={handelInputChange}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handelInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center ">
                        <button
                            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handelLogin}
                            disabled={loginButton}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginCom