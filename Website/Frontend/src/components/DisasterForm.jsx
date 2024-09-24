import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function DisasterForm() {

    const baseURL = import.meta.env.VITE_USED_URL
    const version = import.meta.env.VITE_API_VERSION

    const navigate = useNavigate()
    const [submitButton, setSubmitButton] = useState(true)

    const [disasterInfo, setDisasterInfo] = useState({
        typeofDisaster: "",
        level: "",
        description: "",
        address: "",
        city: "",
        country: "",
        pincode: "",
    })

    useEffect(() => {
        if (disasterInfo.address.length > 0 && disasterInfo.city.length > 0 && disasterInfo.country.length > 0 && disasterInfo.description.length > 0 && disasterInfo.level.length > 0 && disasterInfo.pincode.length > 0 && disasterInfo.typeofDisaster.length > 0) {
            setSubmitButton(false)
        }
        else {
            setSubmitButton(true)
        }
    }, [disasterInfo])



    const handelInputChange = (e) => {
        setDisasterInfo({ ...disasterInfo, [e.target.name]: e.target.value });
    }

    const handelRequest = () => {
        axios.post(`${baseURL}/${version}/user/disasterentry`, disasterInfo)
            .then((response) => {
                // console.log(response.data)
                navigate("/disasters/")
            })
            .catch((error) => {
                console.log("Error :- ", error);
            })
    }

    const handelSubmit = (e) => {
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
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Disaster Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Disaster Type
                                    </label>
                                    <select defaultValue="both" name='typeofDisaster' onChange={handelInputChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                        <option value="both">Select</option>
                                        <option value="both">Both</option>
                                        <option value="manmade">Man Made</option>
                                        <option value="natural">Natural</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Disaster Level
                                    </label>
                                    <select defaultValue="1" name='level' onChange={handelInputChange} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                        <option value="Level 1: Local Incident">Select</option>
                                        <option value="Level 1: Local Incident">Level 1: Local Incident</option>
                                        <option value="Level 2: Disaster">Level 2: Disaster</option>
                                        <option value="Level 3: Major Disaster">Level 3: Major Disaster</option>
                                        <option value="Level 4: Catastrophe">Level 4: Catastrophe</option>
                                        <option value="Level 5: Extinction">Level 5: Extinction</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Location Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Address
                                    </label>
                                    <textarea
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Address"
                                        name="address"
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
                                        City
                                    </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="City"
                                        name="city"
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
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Country"
                                        name="country"
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
                                        Pin Code
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Pin Code"
                                        name="pincode"
                                        onChange={handelInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Disaster Descripation
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Descripation
                                    </label>
                                    <textarea
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Descripation"
                                        rows="4"
                                        name="description"
                                        onChange={handelInputChange}
                                    ></textarea>
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
                            onClick={handelSubmit}
                            disabled={submitButton}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisasterForm