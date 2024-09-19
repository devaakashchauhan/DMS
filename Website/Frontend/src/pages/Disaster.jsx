import React from 'react'
import DisasterInfo from '../components/Card/DisasterInfo.jsx'
import { useParams } from 'react-router-dom'

function Disaster() {
  const disasterId = useParams()

  return (
    <>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mt-32">
          <DisasterInfo />
          <DisasterInfo />
          <DisasterInfo />
          <DisasterInfo />
          <DisasterInfo />
          <DisasterInfo />
        </div>
      </div>
    </>
  )
}

export default Disaster