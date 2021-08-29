import React from 'react'
import '../../../Style/Components/Search.css'

import SearchIcon from '@material-ui/core/Icon';
import search from '../../../Style/icons/search36.png'

function Search() {
    return(
        <>
         <div className="search-area">
            <input 
            className="search"
            type='text'
            label='Search'
            placeholder = 'Search....'
            />
            <img 
            className="search-icon"
             src={search}
             alt='icon de buscar'/>

         </div>
        </>
    )
}

export default Search;