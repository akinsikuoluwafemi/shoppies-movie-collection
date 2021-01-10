import React, {useContext, useEffect, useState} from 'react';
import {AllMoviesContext } from '../ContextFile';
import axios from 'axios';

// http://www.omdbapi.com/?i=tt3896198&apikey=2a3aa076



export default function SearchBar() {
 
    useEffect(() => {
        getMovies()
    },[])
 
    let { allMovies, setAllMovies } = useContext(AllMoviesContext);

    const [query, setQuery] = useState('')

  const getMovies = async () => {
      let result = await axios.get(`http://www.omdbapi.com/?apikey=2a3aa076&s=Batman`)
        .then(response => {
          let newArray =  response.data.Search.map((movies) => {
              movies.isNominated = false
              console.log(movies)
              setAllMovies(movies)

          })

            return newArray

        }, (error) => {
                return console.log(error)
        })
      return result;
  };

    
    c
    
    
  
    

  return (
    <div class="card w-100">
      <div class="card-body">
        <div class="mb-2">
          <label for="movie" class="form-label">
            Movie Title
          </label>
          <input
            type="search"
            class="form-control"
            placeholder="search for anything"
          />
        </div>
      </div>
    </div>
  );
}
