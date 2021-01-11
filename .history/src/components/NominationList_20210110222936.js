import React from 'react';
import NominationItem from './NominationItem';


export default function NominationList({ nominations }) {
  
    console.log(nominations)
  
    const renderedNominations = nominations.map(movie => {
        return <NominationItem/>
    })
  
    return <div>{ }</div>;
}
