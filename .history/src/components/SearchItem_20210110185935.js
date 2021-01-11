import React, {useState, useContext} from 'react'
import { NominatedMoviesContext } from "../ContextFile";
export default function SearchItem({movie}) {
    
    let { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);

    
    const [nominated, setNominated] = useState(false);
    



    const nominateMovie = () => {
        setNominated(prevValue => !prevValue)
        let tempObj = { ...movie, isNominated: true }



        setNominatedMovies(tempObj)

            const newMovie = [prevItems, ...tempObj]
            localStorage.setItem('n-movies', JSON.stringify(newMovie))
            return newMovie;
        })

        console.log(tempObj)

    }
   
   
    return (
        <ul  className="list">
            <li className="list-item">
                {movie.Title} ({movie.Year})
                <button onClick={nominateMovie} className="btn btn-success">{ movie.isNominated ? `remove`: `nominate`}</button>
            </li>
        </ul>
        
            
    );
}


  