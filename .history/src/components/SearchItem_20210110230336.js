import React, {useState, useContext} from 'react'
import { NominatedMoviesContext } from "../ContextFile";
export default function SearchItem({movie}) {
    
    let { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);

    
    const [nominated, setNominated] = useState(false);
    



    const nominateMovie = () => {
        setNominated(prevValue => !prevValue)
        let tempObj = { ...movie, isNominated: true }


        if(nominatedMovies.length < 6){
            setNominatedMovies(prevValue => [ ...prevValue, tempObj ])
            localStorage.setItem("n-movies", JSON.stringify(nominatedMovies));
        }else if(nominatedMovies.length === 5) {
            alert('you have ')
        }


        console.log(tempObj)

    }

    console.log(nominatedMovies.length)
   
   
    return (
        <ul  className="list">
            <li className="list-item">
                {movie.Title}, ({movie.Year})
                <button onClick={nominateMovie} className="btn btn-outline-success disabled">{ nominatedMovies.length === 5 ? null: `Nominate`}</button>
            </li>
        </ul>
        
            
    );
}


  