import React from 'react';
import CardWrapper from './CardWrapper';


export default function Nominations() {
    return (<CardWrapper>

             <ul className="list">
                <li className="list-item" >Rambo (1999) <button className="btn btn-success" >Nominate</button></li>
                <li className="list-item" >Hey Ram (2000) <button className="btn btn-success" >Nominate</button></li>
                <li className="list-item" >Ram Dass, Going Home (2007) <button className="btn btn-success" >Nominate</button></li>


            </ul>
    </CardWrapper>

    )
}
