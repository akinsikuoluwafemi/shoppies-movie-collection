import React, {useState, useContext} from 'react'
import { NominatedMoviesContext } from "../ContextFile";
export default function SearchItem({movie}) {
    
    let { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);

    
    const [nominated, setNominated] = useState(false);
    



    const nominateMovie = () => {
        setNominated(prevValue => !prevValue)
        let tempObj = { ...movie, isNominated: true }



        setNominatedMovies(prevValue => [ ...prevValue, tempObj ])
        

        localStorage.setItem("n-movies", JSON.stringify(nominatedMovies));

        console.log(tempObj)

    }

    console.log(nominatedMovies.length)
   
   
    return (
      <ul className="list">
        <li className="list-item">
          {movie.Title}, ({movie.Year})
          <button onClick={nominateMovie} className="btn btn-outline-success">
            {nominatedMovies.length ? `remove` : `Nominate`}
          </button>
        </li>
      </ul>
    );
}


  