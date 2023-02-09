import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function PlanetDetails () {
    const {name} = useParams()
    const location = useLocation();
    const {population, rotation, climate, diameter, orbital_period, gravity, surface_water, terrain} = location.state

    return (
        <div className="container">
            <div className="row">
                <div className="col m-3"><img src="https://via.placeholder.com/500x300"></img></div>
                <div className="col pt-3">
                    <h3>{name}</h3>
                    <p>Planet info....some planet info.... a paragraph of planet info... write some info here... yada yada yada</p>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">Population: {population}</div>
                <div className="col m-2">Orbital Period: {orbital_period}</div>
                <div className="col m-2">Rotation Period: {rotation}</div>
                <div className="col m-2">Diameter: {diameter}</div>
                <div className="col m-2">Climate: {climate}</div>
                <div className="col m-2">Terrain: {terrain}</div>
                <div className="col m-2">Surface Water: {surface_water}</div>
                <div className="col m-2">Gravity: {gravity}</div>
            </div>
        </div>
    )
}