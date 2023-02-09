import React from "react";
import { Link, Outlet} from "react-router-dom";

export default function CharCard ({name, birthyear, height, mass, gender, eye_color, hair_color, skin_color}) {

    const charDetailsData = {
        birthyear: birthyear,
        gender: gender,
        eye_color: eye_color,
        hair_color: hair_color,
        height: height,
        mass:mass,
        skin_color:skin_color,
    }

    return (
        <div className="card m-3 p-0" style={{"width": 18 + 'rem'}}>
            <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="card-text list-unstyled fs-5">
                    <li className="fs-6">Birth year: {birthyear}</li>
                    <li className="fs-6">Height: {height}</li>
                    <li className="fs-6">Mass: {mass}</li>
                </ul>
                <Link to={`character-details/${name}`} state={charDetailsData} className="btn btn-primary">Details</Link>
                <Outlet />
            </div>
        </div>
    )
}