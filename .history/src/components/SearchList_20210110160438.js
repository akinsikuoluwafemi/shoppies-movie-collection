import React from 'react';
import SearchItem from './SearchItem';


export default function SearchList({allMovies}) {
   const renderedMovies = allMovies.map(movie => {
       return <SearchItem/>
   })
       
    
    return (
        <div>
            {renderedMovies}
        </div>
    )
}
