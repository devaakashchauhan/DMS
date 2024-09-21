import React, { useEffect, useState } from 'react'
import AdminDisasterCardCOM from '../components/Card/AdminDisasterCardCOM'
import axios from 'axios'

function AdminDisaster() {
    const [allDisaster, setAllDisaster] = useState([])
    const baseUrl = import.meta.env.VITE_USED_URL
    const apiversion = import.meta.env.VITE_API_VERSION

    useEffect(() => {
        axios.get(`${baseUrl}/${apiversion}/user/alldisaster`)
            .then((response) => {
                console.log(response.data.data.allDisaster);

                setAllDisaster(response.data.data.allDisaster)
            })
            .catch((error) => {
                console.log(error);

            })
    }, [])
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center mt-32">
                    {allDisaster.map((eachCard) => (

                        <AdminDisasterCardCOM
                            key={eachCard._id}
                            address={eachCard.address}
                            city={eachCard.city}
                            country={eachCard.country}
                            createdAt={eachCard.createdAt}
                            description={eachCard.description}
                            level={eachCard.level}
                            pincode={eachCard.pincode}
                            statu={eachCard.status}
                            typeofDisaster={eachCard.typeofDisaster}
                            updatedAt={eachCard.updatedAt}
                            _id={eachCard._id}
                        />
                    ))}


                </div></div >
        </>
    )
}

export default AdminDisaster