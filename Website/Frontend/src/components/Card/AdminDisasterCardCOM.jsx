import React from 'react'
import natural from "../../assets/Image/natural.jpg"
import manMade from "../../assets/Image/manMade.jpg"
import both from "../../assets/Image/both.jpg"
import { Link } from 'react-router-dom'


function AdminDisasterCardCOM({ address,
    city,
    country,
    createdAt,
    description,
    level,
    pincode,
    statu,
    typeofDisaster,
    updatedAt,
    _id, }) {
    return (
        <>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200">
                    <img
                        alt="..."
                        src={typeofDisaster == "both" ? both : typeofDisaster == "natural" ? natural : typeofDisaster == "manmade" ? manMade : null}
                        className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                            <polygon
                                points="-30,95 583,95 583,65"
                                className="text-lightBlue-500 fill-current"
                            ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-black uppercase">
                            {typeofDisaster}
                        </h4>
                        <h4 className="text-xl font-bold text-black">
                            {level}
                        </h4>

                        <p className="text-md font-light mt-2 text-black uppercase">
                            {city}
                        </p>
                    </blockquote>
                    <div className="pl-6 pb-3">
                        <Link to={`/dashboard/details/${_id}`}>
                            <button
                                className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                View
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDisasterCardCOM