import React, {useContext} from 'react';
import {AllMoviesContext } from '../ContextFile';
import axios from 'axios';

// http://www.omdbapi.com/?i=tt3896198&apikey=2a3aa076

export default function SearchBar() {
  let { nominatedMovies, setNominatedMovies } = useContext(AllMoviesContext);

  const getMovies = async () => {
    //www.omdbapi.com/?s=Batman&apikey=2a3aa076
    //www.omdbapi.com/?s=Batman&apikey=2a3aa076
    let result = await axios.get(" ");
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
