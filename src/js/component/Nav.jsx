import React from "react";
import { Link } from "react-router-dom";
import starwarsImage from "../../img/star-wars-96.png";

export default function NavBar () {

    return (
        <div className="d-flex justify-content-between">
            <Link to="/"><img src={starwarsImage} alt="star wars logo"></img></Link>
            <li className="nav-item dropdown list-unstyled pt-4">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul>
            </li>
        </div>
    )
}