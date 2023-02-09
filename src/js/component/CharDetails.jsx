import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function CharDetails () {
    const location = useLocation();
    const {name} = useParams();
    const {birthyear} = location.state;
    // const data = useOutletContext()

    return (
        <div className="container">
            <div className="row">
                <div className="col"><img src="https://via.placeholder.com/500x300"></img></div>
                <div className="col">
                    <h3>{name}</h3>
                    <p>Character info....some character info.... a paragraph of character info... write some info here... yada yada yada</p>
                </div>
            </div>
            <div className="row">
                {/* <div className="col">Homeworld:</div> */}
                {/* <div className="col">Species:</div> */}
                <div className="col">Birthyear:{birthyear}</div>
                <div className="col">Gender:</div>
                <div className="col">Eye color:</div>
                <div className="col">Hair color:</div>
                <div className="col">Height:</div>
                <div className="col">Vehicle:</div>
            </div>
        </div>
    )
}