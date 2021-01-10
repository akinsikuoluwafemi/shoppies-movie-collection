import React from 'react';
import SearchItem from './SearchItem';


export default function SearchList({movies}) {
  console.log(movies)
    const renderedList = movies.map(movie => {
       movie
        return <SearchItem />
          
   })
       
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
