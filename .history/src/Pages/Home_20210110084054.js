import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Nominations from '../components/Nominations';
import './Home.css';



export default function Home() {
    return (
      <div className="container px-2 py-4">
        <div className="row">
          <SearchBar />
        </div>
        <div className="row search-wrapper">
          <SearchResults />
          <Nominations />
        </div>
      </div>
    );
}
