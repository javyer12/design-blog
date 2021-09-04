import React, { useState, useContext } from 'react'
import '../../../Style/Components/Header.css'

import ThemeContext from '../../Context/ThemeContext';

import Search from './Search'


const Header = () => {
    const color = useContext(ThemeContext);

    
 
    return (
        <>
         <div className="header">
            <Search/>
            
            <h2 style={{color}}>Log in</h2>
           
         </div>
        </>
    )
}

export default Header;