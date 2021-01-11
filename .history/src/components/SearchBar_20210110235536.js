import React, {useContext, useEffect, useState} from 'react';
import { AllMoviesContext, QueryContext, LoadingContext } from "../ContextFile";
import axios from 'axios';

// http://www.omdbapi.com/?i=tt3896198&apikey=2a3aa076



export default function SearchBar() {
 
    useEffect(() => {
        // getMovies();
        
    }, [])
 
    let { allMovies, setAllMovies } = useContext(AllMoviesContext);

    const { query, setQuery } = useContext(QueryContext);

    const {loading, setLoading} = useContext(LoadingContext);

  const getMovies = async () => {
    setLoading(true)  
      
      let result = await axios.get(`http://www.omdbapi.com/?apikey=2a3aa076&s=${query}`)
        .then(response => {
            // console.log(response.data.Search)

            setAllMovies(response.data.Search)
            s


        }, (error) => {
             console.log(error)
        })
      return result;
  };

    
    const handleInputChange = (e) => {
        setQuery(e.target.value)
        if(query.length > 2){
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
