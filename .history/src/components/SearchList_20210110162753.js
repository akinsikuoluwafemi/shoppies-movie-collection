import React from 'react';
import SearchItem from './SearchItem';


export default function SearchList({movies}) {
    const renderedList = movies.map(movie => {
       movie.isNominated = false
        return <SearchItem movie={} />
          
   })
       
  console.log(movies);
    
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
