import React from 'react';
import CardWrapper from './CardWrapper';
import NominationList from './NominationList';
import { AllMoviesContext, NominatedMoviesContext } from "../ContextFile";


export default function Nominations() {
    
    const [nominatedMovies, setNominatedMovies] = useState(
      JSON.parse(localStorage.getItem("n-movies")) || []
    );

    
    return (
        
        <CardWrapper>

             {/* <ul className="list">
                <li className="list-item" >Ram Dass (2007) <button className="btn btn-danger" >Remove</button></li>


            </ul> */}
            <NominationList/>
    </CardWrapper>

    )
}
