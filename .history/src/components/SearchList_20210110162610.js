import React from 'react';
import SearchItem from './SearchItem';


export default function SearchList({movies}) {
//   console.log(movies)
    const renderedList = movies.map(movie => {
       movie.isNominated = false
        return <SearchItem />
          
   })
       
  console.log(movies);
    
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
