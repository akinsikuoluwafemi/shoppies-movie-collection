import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Nominations from '../components/Nominations';
import './Home.css';



export default function Home() {
    return (
      <div className="">
        <div className="row">
          <SearchBar />
        </div>
        <div className=" search-wrapper">
          <SearchResults />
          <Nominations />
        </div>
      </div>
    );
}
