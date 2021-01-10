import React from 'react'

export default function SearchList({allMovie}) {
    console.log(typeof allMovie)
    
    return (
        <div>
            {allMovie.length}
        </div>
    )
}
