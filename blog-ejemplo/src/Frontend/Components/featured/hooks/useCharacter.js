import { useState,  useEffect } from 'react';

const useCharacter = url => {
               const  [personajes, setPersonajes] = useState([])
               useEffect(()  => {
                              fetch(url)
                              .then(response => response.json())
                              .then( data => setPersonajes(data.results))
               }, [ url ]  )
               return personajes 
};

export default useCharacter;