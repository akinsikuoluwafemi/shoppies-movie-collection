import React, {useState} from 'react'

export default function SearchItem({movie}) {
    const [nominated, setNominated] = useState(false);
    


    const nominateMovie = () => {
        setNominated(prevValue => !prevValue)
        let tempObj = { ...movie, isNominated: true }
        console.log(tempObj)
    }
   
   
    return (
        <ul onClick={co}  className="list">
            <li className="list-item">
                {movie.Title} ({movie.Year})
                <button onClick={nominateMovie} className="btn btn-success">Nominate</button>
            </li>
        </ul>
        
            
    );
}


  