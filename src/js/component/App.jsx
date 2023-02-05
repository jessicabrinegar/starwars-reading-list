import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Nav.jsx"
import Footer from "./Footer.jsx"
import Homepage from "./Homepage.jsx"
import Favorites from "./Favorites.jsx"
import CharDetails from "./CharDetails.jsx";
import VehicleDetails from "./VehicleDetails.jsx";
import PlanetDetails from "./PlanetDetails.jsx";

export default function App () {

    return (
        <div className="container text-center w-100">
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route path="favorites" element={<Favorites/>}/>
                <Route path="character-details/:name/" element={<CharDetails/>}/>
                <Route path="vehicle-details/:name/" element={<VehicleDetails/>}/>
                <Route path="planet-details/:name/" element={<PlanetDetails/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}