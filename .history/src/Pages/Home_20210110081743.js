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
        <div className="row pt-3">
          <div className="m-auto w-45 col-lg-6 col-sm-12 bg-success ">
            <SearchResults />
          </div>
            <Nominations />
          </div>
        </div>
      </div>
    );
}
