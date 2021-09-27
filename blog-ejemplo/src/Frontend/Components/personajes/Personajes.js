import React, { useState,useReducer, useMemo, useRef, useCallback} from 'react';
// import Search from '../Header/Search';
import  useCharacter from '../featured/hooks/useCharacter'

const initialState = {
    favorites: []
}

const  API  =  'https://rickandmortyapi.com/api/character/'

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
const Personajes  =  () =>  {

    const  [ favorites, dispatch ] = useReducer( favoriteReducer, initialState );
    const  [ search, setSearch ] = useState('');
    const  searchInput = useRef( null );


    const personajes = useCharacter( API )

    const handleClick = favorite => {
            dispatch( { type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    const handleSearch = () => {
        setSearch(searchInput.current.value);
    }

    // const handleSearch1 = useCallback(() => {
    //     setSearch(searchInput.current.value)
    // }, [])

    // const filteredUsers = personajes.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })
    const filteredUsers = useMemo(() => 

        personajes.filter((user) => {
                return user.name.toLowerCase().includes(search.toLowerCase());
            }),
        [personajes, search]

    )
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

            <div className = 'search' style = {{marginBottom: '5%'}}>
                <p> Busca tus personajes </p>
                    <input 
                        type = "text" 
                        value = {search}  
                        onChange={handleSearch}
                        ref = {searchInput}
                    />
            </div>

                {/* <Search search={search} searchInput={searchInput} handleSearch={handleSearch1}/> */}
        
            <h3 style={{textAlign:'left'}, {marginRight:'85%'}}>Personajes de Rick and Morty: </h3>

            { filteredUsers.map(personaje => (
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