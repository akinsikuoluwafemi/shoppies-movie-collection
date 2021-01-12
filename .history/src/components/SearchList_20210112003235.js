import React, {useContext} from 'react';
import SearchItem from './SearchItem';
import Spinner from './Spinner';
import {LoadingContext} from '../ContextFile';

export default function SearchList({ movies }) {
  const { loading, setLoading } = useContext(LoadingContext);

  if (!movies) {
    return null;
  }
  const renderedList = movies.map((movie) => {
    movie.isNominated = false;
    return <SearchItem key={movie.imdbID} movie={movie} />;
  });

  return (
    <div>
      {loading && <Spinner />}
      {renderedList}
    </div>
  );
}
