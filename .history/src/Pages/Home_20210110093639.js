import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Nominations from '../components/Nominations';
import './Home.css';
import { NominationArrayContext, SearchArrayContext } from './ContextFile';




export default function Home() {
    
    let [nominatedMovie, setNominatedMovie] = useState([]);

    let [allMovies, setAllMovies] = useState([]);



    
    return (
      <div className="home-wrapper">
        <div className="home-wrapper_search">
          <SearchBar />
        </div>
        <div className=" search-wrapper">
          <SearchResults />
          <Nominations />
        </div>
      </div>
    );
}
