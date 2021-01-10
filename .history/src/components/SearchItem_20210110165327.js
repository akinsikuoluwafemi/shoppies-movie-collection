import React from 'react'

export default function SearchItem({movie}) {
   
    const nominateMovie = () => {
        
    }
   
   
    return (
        <ul onClick={() => console.log(movie)}  className="list">
            <li className="list-item">
                {movie.Title} ({movie.Year})
                <button onClick={no} className="btn btn-success">Nominate</button>
            </li>
        </ul>
        
            
    );
}


  