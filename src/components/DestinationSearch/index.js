import React, {useState} from 'react'
import DestinationItem from '../DestinationItem'
import './DestinationSearch.css'
import searchIcon from '../../assets/search-icon.png'

const DestinationSearch = ({destinationsList}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDestinations = destinationsList.filter(destination =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="destination-search-container">
      <div className="search-container">
        <img src={searchIcon} alt="search icon" className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="destinations-container">
        {filteredDestinations.map(destination => (
          <DestinationItem key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  )
}

export default DestinationSearch
