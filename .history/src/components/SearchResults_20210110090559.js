import React from 'react';
import CardWrapper from './CardWrapper';
import '../'

export default function SearchResults() {
    return (
        <CardWrapper>
            <h4>Results for "ram"</h4>
            <ul className="list">
                <li>Rambo (1999) <button>Nominate</button></li>
            </ul>
      </CardWrapper>
    );
}
