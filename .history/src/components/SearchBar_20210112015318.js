import React, { useContext } from "react";
import { AllMoviesContext, QueryContext, LoadingContext } from "../ContextFile";
import axios from "axios";


export default function SearchBar() {
  

  let { setAllMovies } = useContext(AllMoviesContext);

  const { query, setQuery } = useContext(QueryContext);

  const {  setLoading } = useContext(LoadingContext);

const { REACT_APP_IMDB_KEY } = process.env;
  const getMovies = async () => {
    setLoading(true);

    let result = await axios
      .get(`http://www.omdbapi.com/?apikey=&s=${query}`)
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
    <div className="card w-100">
      <div className="card-body">
        <form className="mb-2" onSubmit={handleSubmit}>
          <label htmlFor="movie" className="form-label">
            Movie Title
          </label>
          <input
            type="search"
            className="form-control"
            placeholder="search for anything"
            value={query}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}
