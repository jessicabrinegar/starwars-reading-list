import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function VehicleCard ({name, manufacturer, mglt, model}) {

    return (
        <div className="card m-3 p-0" style={{"width": 20 + 'rem'}}>
        <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="..." />
        <div className="card-body text-wrap">
            <h5 className="card-title">{name}</h5>
            <ul className="card-text list-unstyled fs-5">
                <li className="fs-6">Model: {model}</li>
                <li className="fs-6">Manufacturer: {manufacturer}</li>
                <li className="fs-6">MGLT: {mglt}</li>
            </ul>
            <Link to="vehicle-details" className="btn btn-primary">Details</Link>
            <Outlet></Outlet>
        </div>
    </div>
    )
}