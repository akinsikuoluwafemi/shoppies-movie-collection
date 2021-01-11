import React, {useState, useContext} from 'react'
import { NominatedMoviesContext, ShowBannerContext } from "../ContextFile";
export default function SearchItem({movie}) {
    
    let { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);

    
    const [nominated, setNominated] = useState(false);
    
    const {showBanner, setShowBanner} = useContext(ShowBannerContext)



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

        console.log(tempObj)
        if(tempObj.isNominated === true){
            alert('set to true')
        }

    }

    console.log(nominatedMovies.length)
   
   
    return (
        <ul  className="list">
            <li className="list-item">
                {movie.Title}, ({movie.Year})
                {/* disabled */}
                <button onClick={nominateMovie} className="btn btn-outline-success"> { movie.isNominated ? `Remove`: `Nominate`}</button>
            </li>
        </ul>
        
            
    );
}


  