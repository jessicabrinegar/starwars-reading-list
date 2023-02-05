import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function VehicleCard ({name, manufacturer, mglt, model}) {

    return (
        <div className="card" style={{"width": 18 + 'rem'}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <ul className="card-text">
                <li>Model: {model}</li>
                <li>Manufacturer: {manufacturer}</li>
                <li>MGLT: {mglt}</li>
            </ul>
            <Link to="vehicle-details" className="btn btn-primary">Details</Link>
            <Outlet></Outlet>
        </div>
    </div>
    )
}