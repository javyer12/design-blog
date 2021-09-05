import React from 'react'
import '../../../Style/Components/Search.css'

import searcher from '../../../Style/icons/search36.png'

const Search =  (search, searchInput, handleSearch) =>{
   
    return(
        <>
         <div className="search-area">
            <input 
                className="search"
                type='text'
                // value = {search}
                // ref = {searchInput}
                // onChange = {handleSearch}
                placeholder = 'Search....'
            />
            <img 
                className="search-icon"
                src={searcher}
                alt='icon de buscar'/>

         </div>
        </>
    )
}

export default Search;