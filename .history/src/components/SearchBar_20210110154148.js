import React, {useContext, useEffect, useState} from 'react';
import { AllMoviesContext, QueryContext } from "../ContextFile";
import axios from 'axios';

// http://www.omdbapi.com/?i=tt3896198&apikey=2a3aa076



export default function SearchBar() {
 
    useEffect(() => {
        // getMovies();
        
    }, [])
 
    let { allMovies, setAllMovies } = useContext(AllMoviesContext);

    const { query, setQuery } = useContext(QueryContext);

  const getMovies = async () => {
      let result = await axios.get(`http://www.omdbapi.com/?apikey=2a3aa076&s=${query}`)
        .then(response => {
                //   let newArray = response.data.Search.map((movies) => {
                //     movies.isNominated = false;
                //     console.log(movies);
                //       setAllMovies(movies);
            console.log(response.data.Search)
            }))

            // setAllMovies(response.data.Search)
                    


        }, (error) => {
                return console.log(error)
        })
      return result;
  };

    
    const handleInputChange = (e) => {
        setQuery(e.target.value)
        if(query){
          getMovies();
        }

    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        getMovies();

    }
    


  
    

  return (
    <div class="card w-100">
      <div class="card-body">
        <form class="mb-2" onSubmit={handleSubmit}>
          <label for="movie" class="form-label">
            Movie Title
          </label>
          <input
            type="search"
            class="form-control"
            placeholder="search for anything"
            value={query}
            onChange={handleInputChange}/>
        </form>
      </div>
    </div>
  );
}
