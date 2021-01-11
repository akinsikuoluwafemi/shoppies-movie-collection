import React from 'react'

export default function NominationItem({movie}) {
  const removeNominations = () => {
      
  }
  
    return (
         <ul  className="list">
            <li className="list-item">
                {movie.Title} ({movie.Year})
                <button onClick={nominateMovie} className="btn btn-success">{ movie.isNominated ? `remove`: `nominate`}</button>
            </li>
        </ul>
    )
}
