import React from "react";

export default function PlanetCard ({name, population, rotation, climate}) {

    return (
        <div className="card" style={{"width": 18 + 'rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="card-text">
                    <li>Population: {population}</li>
                    <li>Rotation Period: {rotation}</li>
                    <li>Climate: {climate}</li>
                </ul>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}