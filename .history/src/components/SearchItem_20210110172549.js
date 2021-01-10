import React, {useState} from 'react'

export default function SearchItem({movie}) {
    const [nominated, setNominated] = useState(false);
    


    const nominateMovie = (id) => {
        setNominated(prevValue => !prevValue)
        let tempObj = { ...movie, isNominated: true }
        console.log(tempObj)
    }
   
   
    return (
        <ul  className="list">
            <li className="list-item">
                {movie.Title} ({movie.Year})
                <button onClick={nominateMovie(movie.)} className="btn btn-success">{ movie.isNominated ? `remove`: `nominate`}</button>
            </li>
        </ul>
        
            
    );
}


  