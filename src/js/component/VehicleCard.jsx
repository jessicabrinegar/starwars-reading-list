import React from "react";

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
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
}