import React, { useState, useEffect,useReducer } from 'react';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites,  action.payload]
            }
        default:
            return state;
    }
}
const Personajes = () => {
    const [ personajes, setPersonajes] = useState([])
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then( response => response.json())
        .then(data => setPersonajes(data.results))
    }, [])

    const handleClick = favorite => {
            dispatch( { type: 'ADD_TO_FAVORITE', payload: favorite })
    }


    //caa vez que se itere se debe pasar un key, no usar el valor del index del arreglo,
    //tampoco debe de ser numericos

    return (
        <>
        <div className = 'personajes'>

            <h1>Tus favoritos son: </h1>
            { favorites.favorites.map(favorite => (
                <ul key = {favorite.id}>
                    {favorite.name}
                </ul>
            ))}

            {personajes.map(personaje => (
                <div className = 'item' key={personaje.id} style={{textAlign:'left'}, {marginRight:'80%'}}> 
                <h4>{personaje.name}</h4>
                <button type='button' onClick = {() => handleClick(personaje)}>
                    Agregar a favorito
                </button>
                </div>
            ))}
           
        </div>
        </>
    )
}

export default Personajes;