import React, {useState, useContext} from 'react'
import { NominatedMoviesContext, ShowBannerContext, AllMoviesContext, NominatedMovieContext } from "../ContextFile";
import '../Pages/Home.css';

export default function SearchItem({movie }) {
    
    const { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);


    const { allMovies, setAllMovies } = useContext(AllMoviesContext);
    
    const { nominated, setNominated } = useContext(false);
    
    const {showBanner, setShowBanner} = useContext(ShowBannerContext)



    const nominateMovie = () => {
        setNominated(prevValue => !prevValue)
        let tempObj = { ...movie, isNominated: true }

            setNominatedMovies(prevValue => [ ...prevValue, tempObj ])
            localStorage.setItem("n-movies", JSON.stringify([...nominatedMovies, tempObj]));
        
        

        if(nominatedMovies.length+1 === 5){
            setShowBanner(true)
        }

        console.log(tempObj)

    }

   
    return (
        <ul  className="list">
            <li className="list-item">
                {movie.Title}, ({movie.Year})
                {nominated ? (
               <button className="btn btn-outline-success disabled">Nominate</button>
                ): (
                <button onClick={nominateMovie} className="btn btn-outline-success">Nominate</button>
                        
                )}
            </li>
        </ul>
        
            
    );
}


  