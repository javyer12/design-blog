import React from 'react'
import '../../../Style/Components/Header.css'
import Search from './Search'

const Header = () => {
    return (
        <>
         <div className="header">
            <Search/>
            
            <h2>Log in</h2>

         </div>
        </>
    )
}

export default Header;