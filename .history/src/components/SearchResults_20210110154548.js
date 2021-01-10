import React, {useContext, useEffect} from 'react';
import CardWrapper from './CardWrapper';
import '../Pages/Home.css';
import { AllMoviesContext, QueryContext } from "../ContextFile";





export default function SearchResults() {
    
    useEffect(() => {

    }, [])

    const { allMovies, setAllMovies } = useContext(AllMoviesContext);

    const { query, setQuery } = useContext(QueryContext);

    const alterArray = () => {
        let newArr = allMovies.map(movies => {
            movies.isNominated = false;
            console.log(movies)
            setAllMovies(newArr)
        })
    }

    alterArray()

    
    return (
      <CardWrapper>
        {query && <h4>Results for "{query}"</h4>}
        <ul className="list">
          <li className="list-item">
            Rambo (1999) <button className="btn btn-success">Nominate</button>
          </li>
          <li className="list-item">
            Hey Ram (2000) <button className="btn btn-success">Nominate</button>
          </li>
          <li className="list-item">
            Ram Dass, Going Home (2007){" "}
            <button className="btn btn-success">Nominate</button>
          </li>
        </ul>
      </CardWrapper>
    );
}
