import React from 'react';
import SearchItem from './SearchItem';


export default function SearchList({movies}) {
  
    const renderedList = movies.map(movie =>
    {
       return <SearchItem  />
   })
       
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
