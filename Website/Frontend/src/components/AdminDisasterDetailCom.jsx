import React, { useEffect, useState } from 'react'
import natural from "../assets/Image/natural.jpg"
import manMade from "../assets/Image/manMade.jpg"
import both from "../assets/Image/both.jpg"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function AdminDisasterDetailCom() {
    const { id } = useParams();
    const navigate = useNavigate()

    const baseUrl = import.meta.env.VITE_USED_URL
    const apiversion = import.meta.env.VITE_API_VERSION

    const notify = (message) => toast.success(message)

    const [updateButton, setUpdateButton] = useState(false)
    const [DisasterInfo, setDisasterInfo] = useState({})
    const [statusInput, setStatusInput] = useState({
        "status": ""
    })
    const [callApi, setcallApi] = useState(false)

    const [disasterId, setDisasterId] = useState({
        "disasterId": ""
    })

    useEffect(() => {
        axios.get(`${baseUrl}/${apiversion}/user/onedisaster/${id}`,)
            .then((response) => {

                setDisasterInfo(response.data.data[0])
                setDisasterId({ "disasterId": response.data.data[0]._id })
                setStatusInput({ "status": response.data.data[0].status })
            })
            .catch((error) => {
                console.log("Error :- ", error);
            })
    }, [callApi])

    const handelInputChange = (e) => {
        setStatusInput({ ...statusInput, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (statusInput.status == DisasterInfo.status) {
            setUpdateButton(false)
        } else if (statusInput.status != DisasterInfo.status) {
            setUpdateButton(true)
        }
    }, [statusInput])



    const handelDelete = () => {
        axios.post(`${baseUrl}/${apiversion}/admin/deletedisaster`, disasterId, {
            withCredentials: true  // include cookies in requests
        })
            .then((response) => {
                // console.log(response);
                notify("Disaster deleted.")
                navigate("/dashboard/disaster/")
            })
            .catch((error) => {
                console.log("Error :- ", error);
            })
    }

    const handelStatusChange = () => {
        axios.post(`${baseUrl}/${apiversion}/admin/updatestatus`, { ...disasterId, ...statusInput }, {
            withCredentials: true  // include cookies in requests
        })
            .then((response) => {
                // console.log(response);
                notify("Disaster updated.")
                setcallApi(!callApi)
                setUpdateButton(false)
                navigate("/dashboard/disaster/")
            })
            .catch((error) => {
                console.log("Error :- ", error);
            })
    }

    return (
        <>

            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{

                            backgroundImage: `url(${DisasterInfo.typeofDisaster == "both" ? both : DisasterInfo.typeofDisaster == "natural" ? natural : DisasterInfo.typeofDisaster == "manmade" ? manMade : both})`
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>

                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">

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
                                                <h1 defaultValue="both" name='typeofDisaster' className=" uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                                    {DisasterInfo.typeofDisaster}
                                                </h1>
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
                                                <h1 defaultValue="1" name='level' className="uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                                    {DisasterInfo.level}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Disaster Status
                                                </label>
                                                {/* <h1 defaultValue="1" name='level' className="uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                                    {DisasterInfo.status}
                                                </h1> */}
                                                <select name='status' onChange={handelInputChange} className=" uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                                    <option value={DisasterInfo.status}>{DisasterInfo.status}</option>
                                                    <option value={DisasterInfo.status == "Accept" ? "Submit" : "Accept"}>{DisasterInfo.status == "Accept" ? "Submit" : "Accept"}</option>
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
                                                <h1

                                                    className="uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                                    name="address"

                                                >
                                                    {DisasterInfo.address}

                                                </h1>
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
                                                <h1

                                                    className="uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"


                                                >

                                                    {DisasterInfo.city}
                                                </h1>
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
                                                <h1

                                                    className="uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"


                                                >

                                                    {DisasterInfo.country}
                                                </h1>
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
                                                <h1

                                                    className="uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                                >

                                                    {DisasterInfo.pincode}
                                                </h1>
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
                                                <h1

                                                    className="uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                                                >

                                                    {DisasterInfo.description}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-6 pb-3">

                                        <button
                                            className="bg-red-500 hover:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handelDelete}
                                        >
                                            Delete
                                        </button>
                                        {updateButton ? <button
                                            className="bg-sky-500 hover:bg-sky-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handelStatusChange}
                                        >
                                            Update
                                        </button> : null}

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AdminDisasterDetailCom