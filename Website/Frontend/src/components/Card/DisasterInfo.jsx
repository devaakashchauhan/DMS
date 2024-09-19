import React from 'react'
import natural from "../../assets/Image/natural.jpg"
import manMade from "../../assets/Image/manMade.jpg"
import both from "../../assets/Image/both.jpg"

function DisasterInfo() {
    return (
        <>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                    <img
                        alt="..."
                        src={natural}
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
                        <h4 className="text-xl font-bold text-white">
                            Top Notch Services
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                            The Arctic Ocean freezes every winter and much of the
                            sea-ice then thaws every summer, and that process will
                            continue whatever happens.
                        </p>
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default DisasterInfo