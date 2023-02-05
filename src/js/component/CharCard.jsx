import React from "react";

export default function CharCard ({name, birth, height, mass}) {

    return (
        <div className="card" style={{"width": 18 + 'rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="card-text">
                    <li>Birth year: {birth}</li>
                    <li>Height: {height}</li>
                    <li>Mass: {mass}</li>
                </ul>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}