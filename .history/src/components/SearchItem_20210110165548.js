import React, {useState} from 'react'

export default function SearchItem({movie}) {
    const [nominated, setNominated] = useState(false);
    


    const nominateMovie = () => {
        
    }
   
   
    return (
        <ul onClick={() => console.log(movie)}  className="list">
            <li className="list-item">
                {movie.Title} ({movie.Year})
                <button onClick={nominateMovie} className="btn btn-success">Nominate</button>
            </li>
        </ul>
        
            
    );
}


  