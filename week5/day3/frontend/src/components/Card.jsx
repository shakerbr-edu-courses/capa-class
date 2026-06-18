import React from 'react'

const Card = ({name}) => {
  return (
    <div className="text-4xl text-center m-30 p-20 font-black bg-[#007fffcc] rounded-xl text-white shadow-md shadow-blue-500/50">
        <h1>Hey {name}!</h1>
    </div>
  )
}

export default Card