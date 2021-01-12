import React, {useContext, useState} from 'react';
import { AllMoviesContext, NominatedMoviesContext } from "../ContextFile";


export default function NominationItem({movie}) {
  
    let { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);

    const [nominated, setNominated] = useState(true);



    const removeNominations = () => {
        console.log(movie)
        let tempObj = { ...movie, isNominated: false };

        let filteredNomMovies = nominatedMovies.filter(nmovies => nmovies !== movie)
        setNominatedMovies(filteredNomMovies)
        localStorage.setItem("n-movies", JSON.stringify(filteredNomMovies));

    }
  
    return (
         <ul  className="list">
            <li className="list-item">
                {movie.Title}, ({movie.Year})
                <button onClick={removeNominations} className="btn btn-outline-danger">Remove</button>
                <button className="btn btn-outline-danger">Remove from search list</button>
                <button className="btn btn-outline-success">Add back to search list</button>

            </li>
        </ul>
    )
}
