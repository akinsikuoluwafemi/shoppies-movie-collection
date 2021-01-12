import React, {useState, useContext} from 'react'
import { NominatedMoviesContext, ShowBannerContext, AllMoviesContext, SelectedMovieContext } from "../ContextFile";


export default function SearchItem({movie,onMovieSelect}) {
    
    const { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);


    const { allMovies, setAllMovies } = useContext(AllMoviesContext);
    
    const [nominated, setNominated] = useState(false);
    
    const {showBanner, setShowBanner} = useContext(ShowBannerContext)

  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);


    const nominateMovie = () => {
        setNominated(prevValue => !prevValue)
        let tempObj = { ...movie, isNominated: true }


        // if(nominatedMovies.length < 6){
            setNominatedMovies(prevValue => [ ...prevValue, tempObj ])
            localStorage.setItem("n-movies", JSON.stringify(nominatedMovies));
        // }else if(nominatedMovies.length === 5) {
        //     alert('You successfully have 5 nominations')
        // }

        if((nominatedMovies.length + 1) === 5){
            setShowBanner(true)
        }

        // console.log(tempObj)
        // console.log(allMovies)
        onMovieSelect(movie)

    }

    console.log('from search item' ,selectedMovie);
   
    return (
        <ul  className="list">
            <li className="list-item">
                {movie.Title}, ({movie.Year})
                {/* disabled */}
                <button onClick={nominateMovie} className="btn btn-outline-success">{ movie.isNominated ? }</button>
            </li>
        </ul>
        
            
    );
}


  