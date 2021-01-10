import React from 'react';
import SearchItem from './SearchItem';


export default function SearchList({allMovies}) {
   const renderedList = allMovies.map(movie => {
       return <SearchItem movie={movie} />
   })
       
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
