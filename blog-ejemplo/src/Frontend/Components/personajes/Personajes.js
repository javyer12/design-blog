import React, { useState, useEffect } from 'react';

const Personajes = () => {
    const [personaje, setPersonajes] = useState([])
    
    useEffect(() => {
        fetch()
    }, [])
    return(
        <>
        <div className = 'personajes'>
            <h2>{}</h2>
        </div>
        </>
    )
}

export default Personajes;