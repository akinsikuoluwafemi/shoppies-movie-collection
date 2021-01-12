import React, {useContext, useEffect} from 'react';
import CardWrapper from './CardWrapper';
import '../Pages/Home.css';
import { AllMoviesContext, QueryContext, SelectedMovieContext } from "../ContextFile";
import SearchList from './SearchList';




export default function SearchResults() {
    
    useEffect(() => {

    }, [])

    const { allMovies, setAllMovies } = useContext(AllMoviesContext);

    const { query, setQuery } = useContext(QueryContext);

  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);
    
  
    const onMovieSelect = (movie) => {
      let tempObj = { ...movie, isNominated: true };
      
      console.log('From the search result', tempObj)
      setSelectedMovie(tempObj)
      // setAllMovies(prevValue => [ tempObj, ...prevValue])
      // let changedMovie = allMovies.filter(movies => movies !== movie)
      // setAllMovies(tempObj, ...changedMovie)

    }
  
    const changeButtonAfterFulfilled = () => {
      
    }
    
    // console.log(allMovies)

    
    return (
      <CardWrapper>
        {query && <h4>Results for "{query}"</h4>}

        <SearchList onMovieSelect={onMovieSelect} movies={allMovies} />
      </CardWrapper>
    );
}
