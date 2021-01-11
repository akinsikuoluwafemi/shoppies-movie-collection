import React from 'react'

export default function NominationItem({movie}) {
  const removeNominations = () => {
      
  }
  
    return (
         <ul  className="list">
            <li className="list-item">
                {movie.Title} ({movie.Year})
                <button onClick={removeNominations} className="btn btn-danger">{ movie.isNominated ? `Remove`: `nominate`}</button>
            </li>
        </ul>
    )
}
