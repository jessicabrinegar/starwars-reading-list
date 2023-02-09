import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./Nav.jsx"
import Footer from "./Footer.jsx"
import Homepage from "./Homepage.jsx"
import CharDetails from "./CharDetails.jsx";
import VehicleDetails from "./VehicleDetails.jsx";
import PlanetDetails from "./PlanetDetails.jsx";

// create error component
// localStorage: setItem , getItem , removeItem
// eventually want to do more difficult info (for people, use home planet)

export default function App () {
    const [planets, setPlanets] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const handleAddFavs = (name) => {
        setFavorites([...favorites, name])
    }

    const urls = [
        "https://swapi.dev/api/planets",
        "https://swapi.dev/api/people",
        "https://swapi.dev/api/starships"
    ]
    
    const data = urls.map((url) => axios.get(url));

    const getData = () => {
        axios.all(data).then((resp) => {
            localStorage.setItem('planets', JSON.stringify(resp[0].data.results));
            localStorage.setItem('characters', JSON.stringify(resp[1].data.results));
            localStorage.setItem('vehicles', JSON.stringify(resp[2].data.results));
            const planetData = JSON.parse(localStorage.getItem('planets'));
            const characterData = JSON.parse(localStorage.getItem('characters'));
            const vehicleData = JSON.parse(localStorage.getItem('vehicles'));
            setPlanets(planetData);
            setCharacters(characterData);
            setVehicles(vehicleData);
        }, (error) => console.log(error.message))
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container text-center w-100">
            <NavBar favorites={favorites}/>
            <Routes>
                <Route exact path="/" element={<Homepage planets={planets} characters={characters} vehicles={vehicles} handleFavs={handleAddFavs}/>}/>
                <Route path="character-details/:name/" element={<CharDetails characters={characters}/>}/>
                <Route path="vehicle-details/:name/" element={<VehicleDetails vehicles={vehicles}/>}/>
                <Route path="planet-details/:name/" element={<PlanetDetails planets={planets}/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}