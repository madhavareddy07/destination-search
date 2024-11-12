import React from 'react'
import './DestinationItem.css'

const DestinationItem = ({destination}) => {
  const {name, imgUrl} = destination

  return (
    <div className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="destination-name">{name}</p>
    </div>
  )
}

export default DestinationItem
