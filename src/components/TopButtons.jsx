import React from 'react'

function TopButtons({setQuery}) {
  const cities = [
    {
      id:1,
      title: ' Moscow'
    },
    {
      id:2,
      title: ' Kursk'
    },
    {
      id:3,
      title: ' Irkutsk'
    },
    {
      id:4,
      title: ' Voronezh'
    },
    {
      id:5,
      title: ' Krasnodar'
    },
  ]
  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button 
        key={city.id} 
        className="text-white text-lg font-medium" 
        onClick={() => setQuery({q: city.title})}>
          {city.title}
        </button>
      ))}
    </div>
  )
}

export default TopButtons