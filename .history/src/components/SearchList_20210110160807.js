import React from 'react';
import SearchItem from './SearchItem';


export default function SearchList({allMovies}) {
   const renderedList = allMovies.map(movie => {
       return <SearchItem  />
   })
       
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
