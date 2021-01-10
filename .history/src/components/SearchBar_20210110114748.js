import React, {useContext, useEffect} from 'react';
import {AllMoviesContext } from '../ContextFile';
import axios from 'axios';

// http://www.omdbapi.com/?i=tt3896198&apikey=2a3aa076



export default function SearchBar() {
 
    useEffect(() => {
        getMovies()
    },[])
 
    let { nominatedMovies, setNominatedMovies } = useContext(AllMoviesContext);
http://www.omdbapi.com/?apikey=[yourkey]&

  const getMovies = async () => {
      let result = await axios.get(`www.omdbapi.com/?s=Batman&apikey=2a3aa076`)
        .then(response => {
                console.log(response)
            }, (error) => {
                return console.log(error)
        })
      return result;
  };

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
