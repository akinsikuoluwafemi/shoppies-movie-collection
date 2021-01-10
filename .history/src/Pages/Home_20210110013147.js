import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Nominations from '../components/Nominations';




export default function Home() {
    return (
        <div className="container bg-info px">
            <div className="row">
                <SearchBar />

            </div>
            <div className="row">
                <SearchResults />
                <Nominations/>
            </div>
            
        </div>
    )
}
