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

    const onMovieSelect = (movie) => {
      let tempObj = { ...movie, isNominated: true };
      
      console.log('From the search result', tempObj)
      // setAllMovies(prevValue => [ tempObj, ...prevValue])
    }
    
    // console.log(allMovies)

    
    return (
      <CardWrapper>
        {query && <h4>Results for "{query}"</h4>}

        <SearchList onMovieSelect={onMovieSelect} movies={allMovies} />
      </CardWrapper>
    );
}
