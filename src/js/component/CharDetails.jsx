import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function CharDetails () {
    const {name} = useParams();
    const location = useLocation();
    const {birthyear, gender, eye_color, hair_color, skin_color, height, mass} = location.state;

    return (
        <div className="container">
            <div className="row">
                <div className="col m-3"><img src="https://via.placeholder.com/500x300"></img></div>
                <div className="col pt-3">
                    <h3>{name}</h3>
                    <p>Character info....some character info.... a paragraph of character info... write some info here... yada yada yada</p>
                </div>
            </div>
            <div className="row">
                {/* <div className="col">Homeworld:</div> */}
                {/* <div className="col">Species:</div> */}
                <div className="col m-2">Birthyear: {birthyear}</div>
                <div className="col m-2">Gender: {gender}</div>
                <div className="col m-2">Eye color: {eye_color}</div>
                <div className="col m-2">Hair color: {hair_color}</div>
                <div className="col m-2">Skin color: {skin_color}</div>
                <div className="col m-2">Height: {height}</div>
                <div className="col m-2">Mass: {mass}</div>
            </div>
        </div>
    )
}