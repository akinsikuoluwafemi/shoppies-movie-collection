import React from 'react'

export default function SearchItem({movie}) {
    return (
          <ul className="list">
      <li className="list-item">
        {movie.title} ({movie.year})
        <button className="btn btn-success">Nominate</button>
      </li>
    </ul>
        
            
    );
}


  