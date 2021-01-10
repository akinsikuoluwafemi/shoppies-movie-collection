import React from 'react';
import SearchItem from './SearchItem';


export default function SearchList({movies}) {
    if(movies !==)
    const renderedList = movies.map(movie => {
       movie.isNominated = false
        return <SearchItem movie={movie} />
          
   })
       
    
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
