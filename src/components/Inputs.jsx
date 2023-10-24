import React, { useState } from 'react'
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'
import {toast} from 'react-toastify'

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState("")

  const handleSearchClick = () => {
    if(city !== '') setQuery({q: city})
  }

  const handleUnitsChange = (e) => {
    const selectedUnits = e.currentTarget.name
    if(units !== selectedUnits) setUnits(selectedUnits)
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching users location.') 
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched!')
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({
          lat,
          lon,
        })
      })
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input type="text"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            placeholder="search..."
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" />
            <UilSearch size={25} 
            onClick  = {handleSearchClick} 
            className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            <UilMapMarker size={25} 
            onClick = {handleLocationClick} 
            className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div> 
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button name='metric'
            onClick={handleUnitsChange} 
            className="text-xl text-white font-light transition ease-out hover:scale-125">°C</button>
            <p className="text-xl text-white mx-1">|</p>
            <button name='imperial'
            onClick={handleUnitsChange} 
            className="text-xl text-white font-light transition ease-out hover:scale-125">°F</button>
        </div>
    </div>
  )
}

export default Inputs