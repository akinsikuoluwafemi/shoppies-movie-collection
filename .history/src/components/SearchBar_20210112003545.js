import React, { useContext, useEffect, useState } from "react";
import { AllMoviesContext, QueryContext, LoadingContext } from "../ContextFile";
import axios from "axios";


export default function SearchBar() {
  

  let { setAllMovies } = useContext(AllMoviesContext);

  const { query, setQuery } = useContext(QueryContext);

  const {  setLoading } = useContext(LoadingContext);

  const getMovies = async () => {
    setLoading(true);

    let result = await axios
      .get(`http://www.omdbapi.com/?apikey=2a3aa076&s=${query}`)
      .then(
        (response) => {

          setAllMovies(response.data.Search);
          setLoading(false);
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );
    return result;
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (query.length > 2) {
      getMovies();
    }
  };

  const handleSubmit = (e) => {
    setQuery("");
    e.preventDefault();
    getMovies();
  };

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
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
