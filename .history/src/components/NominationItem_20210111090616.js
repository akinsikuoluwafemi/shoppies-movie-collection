import React, {useContext} from 'react';
import { AllMoviesContext, NominatedMoviesContext } from "../ContextFile";


export default function NominationItem({movie}) {
  
    let { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);


    const removeNominations = () => {
        console.log(movie)
        setNominatedMovies(prevValue => [...prevValue])
        let filteredNomMovies = nominatedMovies.filter(movie => movie.T)
    }
  
    return (
         <ul  className="list">
            <li className="list-item">
                {movie.Title}, ({movie.Year})
                <button onClick={removeNominations} className="btn btn-outline-danger">Remove</button>
            </li>
        </ul>
    )
}
