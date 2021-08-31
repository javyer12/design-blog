import React, { useState } from 'react'
import '../../../Style/Components/Header.css'
import Search from './Search'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode( !darkMode )
    }

    return (
        <>
         <div className="header">
            <Search/>
            
            <h2>Log in</h2>
            <button 
            type='button'
            onClick={handleClick}
            >
                {darkMode ? 'Dark Mode' : 'Light Mode'}
                </button>
         </div>
        </>
    )
}

export default Header;