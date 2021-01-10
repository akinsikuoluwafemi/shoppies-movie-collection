import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Nominations from '../components/Nominations';
import './Home.css';
import { NominatedMoviesContext, AllMoviesContext, QueryContext } from "../ContextFile";




export default function Home() {
    
    const [nominatedMovies, setNominatedMovies] = useState([]);

    const [allMovies, setAllMovies] = useState([]);



    
    return (
        <
      <AllMoviesContext.Provider value={{ allMovies, setAllMovies }}>
        <NominatedMoviesContext.Provider value={{nominatedMovies, setNominatedMovies}}>
          <div className="home-wrapper">
            <div className="home-wrapper_search">
              <SearchBar />
            </div>
            <div className=" search-wrapper">
              <SearchResults />
              <Nominations />
            </div>
          </div>
        </NominatedMoviesContext.Provider>
      </AllMoviesContext.Provider>
    );
}
