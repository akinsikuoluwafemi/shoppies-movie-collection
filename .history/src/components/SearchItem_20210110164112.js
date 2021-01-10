import React from 'react'

export default function SearchItem({movie}) {
    return (
        <ul onClick={() => console.}  className="list">
            <li className="list-item">
                {movie.Title} ({movie.Year})
                <button className="btn btn-success">Nominate</button>
            </li>
        </ul>
        
            
    );
}


  