import React, {useContext, useState} from 'react';
import { AllMoviesContext, NominatedMoviesContext } from "../ContextFile";


export default function NominationItem({movie}) {
  
    let { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);

    const [removedFromSearchList, setRemovedFromSearchList] = useState(false);

    const { allMovies, setAllMovies } = useContext(AllMoviesContext);
    console.log(allMovies)

    const removeNominations = () => {
        // console.log(movie)
        // let tempObj = { ...movie, isNominated: false };

        let filteredNomMovies = nominatedMovies.filter(nmovies => nmovies !== movie)
        setNominatedMovies(filteredNomMovies)
        localStorage.setItem("n-movies", JSON.stringify(filteredNomMovies));

    }

    const removeFromSearch = () => {
        let totalRemainingMovies = allMovies.filter(movies => movies.Year !== movie.Year && movies.Title !== movie.Title)
        setAllMovies(totalRemainingMovies);
        setRemovedFromSearchList(true);

    }
  
    const addBackToSearchList = () => {
        let totalRemainingMovies = [movie, ...allMovies]
        setAllMovies(totalRemainingMovies);
        setRemovedFromSearchList(false)
    }

    return (
         <ul  className="list">
            <li className="list-item">
                {movie.Title}, ({movie.Year})
                

                <button onClick={removeNominations} className="btn btn-outline-danger">Remove</button>

                {allMovies.length > 0 && (

                )}


            </li>
        </ul>
    )
}
