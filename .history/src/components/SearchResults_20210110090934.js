import React from 'react';
import CardWrapper from './CardWrapper';
import '../Pages/Home.css';


export default function SearchResults() {
    return (
        <CardWrapper>
            <h4>Results for "ram"</h4>
            <ul className="list">
                <li >Rambo (1999) <button>Nominate</button></li>
            </ul>
      </CardWrapper>
    );
}
