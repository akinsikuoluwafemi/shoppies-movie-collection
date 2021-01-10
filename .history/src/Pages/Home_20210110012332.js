import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults'



export default function Home() {
    return (
        <div className="container">
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
