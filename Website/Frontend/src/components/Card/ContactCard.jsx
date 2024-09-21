import React from 'react'
import natural from "../../assets/Image/natural.jpg"

function ContactCard({ name, phone, des, imagePath }) {
    return (
        <>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                    <img
                        alt="..."
                        src={imagePath}
                        className="w-full  align-middle rounded-t-lg"
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
                        <h4 className=" text-xl font-bold text-white">
                            {name}
                        </h4>
                        <h4 className="text-xl font-bold text-white">
                            {phone}
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                            {des}
                        </p>
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default ContactCard