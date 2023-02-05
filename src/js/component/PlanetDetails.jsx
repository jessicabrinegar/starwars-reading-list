import React from "react";
import { useParams } from "react-router-dom";

export default function PlanetDetails () {
    const {name} = useParams()

    return (
        <div className="container">
            <div className="row">
                <div className="col"><img src="..."></img></div>
                <div className="col">
                    <h3>{name}</h3>
                    <p>Planet info....some planet info.... a paragraph of planet info... write some info here... yada yada yada</p>
                </div>
            </div>
            <div className="row">
                <div className="col">Population:</div>
                <div className="col">Orbital Period:</div>
                <div className="col">Rotation Period:</div>
                <div className="col">Diameter:</div>
                <div className="col">Climate:</div>
                <div className="col">Terrain:</div>
                <div className="col">Surface Water:</div>
                <div className="col">Gravity:</div>
            </div>
        </div>
    )
}