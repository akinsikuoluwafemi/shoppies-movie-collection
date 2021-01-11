import React, {useContext} from 'react';
import SearchItem from './SearchItem';
import Spinner from './Spinner';
import {LoadingContext} from '../ContextFile';

export default function SearchList({ movies, onMovieSelect }) {
  const { loading, setLoading } = useContext(LoadingContext);

  if (!movies) {
    // alert('wrong search')
    return null;
  }
  const renderedList = movies.map((movie) => {
    movie.isNominated = false;
    return <SearchItem  movie={movie} />;
  });

  return (
    <div>
      {loading && <Spinner />}
      {renderedList}
    </div>
  );
}
