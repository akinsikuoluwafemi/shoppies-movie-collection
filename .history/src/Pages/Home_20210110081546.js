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
          <div className=" col-lg-5 col-sm-12 bg-success ">
            <SearchResults />
          </div>
          <div className="m-auto col-lg-5 col-12 bg-info">
            <Nominations />
          </div>
        </div>
      </div>
    );
}
