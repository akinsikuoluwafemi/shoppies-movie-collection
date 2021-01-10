import React from 'react'

export default function SearchItem({movie}) {
   
    const nominateMovie = () => {
        movie.is
    }
   
   
    return (
        <ul onClick={() => console.log(movie)}  className="list">
            <li className="list-item">
                {movie.Title} ({movie.Year})
                <button onClick={nominateMovie} className="btn btn-success">Nominate</button>
            </li>
        </ul>
        
            
    );
}


  