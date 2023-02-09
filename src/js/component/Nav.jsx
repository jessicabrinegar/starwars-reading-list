import React from "react";
import { Link, Outlet } from "react-router-dom";
import starwarsImage from "../../img/star-wars-96.png";

export default function NavBar ({favorites}) {

    return (
        <div className="d-flex justify-content-between">
            <Link to="/"><img src={starwarsImage} alt="star wars logo"></img></Link>
            <li className="nav-item dropdown list-unstyled pt-4">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites {favorites.length}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {favorites.length == 0 ? <li className="ms-2">Add a favorite</li> : favorites.map((fav) => {return <li className="d-flex" key={fav}><a className="dropdown-item pe-0" href="#">{fav}</a><i className="bi bi-trash me-4 pt-1"></i></li>})}
                </ul>
            </li>
            <Outlet></Outlet>
        </div>
    )
}