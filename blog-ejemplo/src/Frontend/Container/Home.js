import React, { useState, useContext } from "react";
import '../../Style/Components/Header.css'


import Header from '../Components/Header/Header';
import HeaderList from "../Components/Header/HeaderList";
import Personajes from '../Components/personajes/Personajes'


const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    
    const handleClick = () => {
        setDarkMode(!darkMode);
    }
        
    return (
        <>
            <Header />
            <HeaderList />
          
            <button 
                  type='button'
                  className = 'btn_dark-light'
                  onClick={handleClick}
            >
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
            
            <Personajes/>
        </>
    )
}

export default Home;