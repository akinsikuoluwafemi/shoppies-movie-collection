import React from 'react';
import SearchItem from './SearchItem';


export default function SearchList({movies}) {
   const renderedList = alovies.map(movie => {
       return <SearchItem  />
   })
       
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
