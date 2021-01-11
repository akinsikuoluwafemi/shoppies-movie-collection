import React , {useContext} from 'react';
import CardWrapper from './CardWrapper';
import NominationList from './NominationList';
import { AllMoviesContext, NominatedMoviesContext } from "../ContextFile";


export default function Nominations() {
    
    let { nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);

    
    return (
        
        <CardWrapper>
            <h4>Results for</h4>
             {/* <ul className="list">
                <li className="list-item" >Ram Dass (2007) <button className="btn btn-danger" >Remove</button></li>


            </ul> */}
            <NominationList nominations={nominatedMovies}/>
    </CardWrapper>

    )
}
