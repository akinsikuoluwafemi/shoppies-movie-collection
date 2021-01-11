import React from 'react';
import SearchItem from './SearchItem';
import Spinner from './Spinner';
import {} from '../ContextFi'

export default function SearchList({movies}) {
    if(!movies){
        // alert('wrong search')
        return null
    }
        const renderedList = movies.map((movie) => {
            movie.isNominated = false;
            return <SearchItem movie={movie} />;
          });
    
  
       
    
    
    return (
      <div>
          <Spinner />
        {renderedList}
      </div>
    );
}
