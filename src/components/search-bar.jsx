import React from 'react'
import './css/search-bar'

const SearchBar = props => {
    return (
        <div id="search-bar">
            <input className="search-input" placeholder={props.placeholder}></input>
        </div>
    )
}

export default SearchBar