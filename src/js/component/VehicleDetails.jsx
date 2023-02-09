import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function VehicleDetails () {
    const {name} = useParams();
    const location = useLocation();
    const {manufacturer, model, mglt, cargo_capacity, crew, hyperdrive_rating} = location.state;


    return (
        <div className="container">
            <div className="row">
                <div className="col m-3"><img src="https://via.placeholder.com/500x300"></img></div>
                <div className="col pt-3">
                    <h3>{name}</h3>
                    <p>vehicle info....some vehicle info.... a paragraph of vehicle info... write some info here... yada yada yada</p>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">Manufacturer: {manufacturer}</div>
                <div className="col m-2">Model: {model}</div>
                <div className="col m-2">MGLT: {mglt}</div>
                <div className="col m-2">Cargo Capacity: {cargo_capacity}</div>
                <div className="col m-2">Crew: {crew}</div>
                <div className="col m-2">Hyperdrive Rating: {hyperdrive_rating}</div>
            </div>
        </div>
    )
}