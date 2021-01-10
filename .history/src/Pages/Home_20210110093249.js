import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Nominations from '../components/Nominations';
import './Home.css';
import { Nomi } from './ContextFile';




export default function Home() {
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
