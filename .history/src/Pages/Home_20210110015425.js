import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Nominations from '../components/Nominations';




export default function Home() {
    return (
      <div className="container px-2 py-4">
        <div className="row">
          <SearchBar />
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 b">
            <SearchResults />
          </div>
          <div className="col-lg-6 col-12 bg-info">
            <Nominations />
          </div>
        </div>
      </div>
    );
}
