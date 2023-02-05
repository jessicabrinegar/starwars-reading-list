import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "./CharCard.jsx"
import VehicleCard from "./VehicleCard.jsx"
import PlanetCard from "./PlanetCard.jsx"

// is this correctly asynchronous?
// eventually want to do more difficult info (for people, use home planet)

export default function Homepage () {
    const [planets, setPlanets] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const urls = [
        "https://swapi.dev/api/planets",
        "https://swapi.dev/api/people",
        "https://swapi.dev/api/starships"
    ]
    const data = urls.map((url) => axios.get(url));
    console.log(data);
    const getData = () => {
        axios.all(data).then((resp) => {
            setPlanets(resp[0].data.results);
            setCharacters(resp[1].data.results);
            setVehicles(resp[2].data.results);
          }, (error) => console.log(error.message));
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="d-block text-start">
            <h3>Characters</h3>
                <div className="container horizontal-scrollable">
                    <div className="row flex-nowrap">
                        {characters.map((char)=> {
                            return <CharCard key={char.name} 
                            name={char.name} 
                            birth={char.birth_year} 
                            height={char.height} 
                            mass={char.mass}/>
                        })}
                    </div>
                </div>
            <h3>Vehicles</h3>
                <div className="container horizontal-scrollable">
                    <div className="row flex-nowrap">
                        {vehicles.map((vehicle)=> {
                            return <VehicleCard key={vehicle.crew} 
                            name={vehicle.name} 
                            manufacturer={vehicle.manufacturer} 
                            mglt={vehicle.MGLT} 
                            model={vehicle.model}/>
                        })}
                    </div>
                </div>
            <h3>Planets</h3>
                <div className="container horizontal-scrollable">
                    <div className="row flex-nowrap">
                        {planets.map((planet) => {
                            return <PlanetCard key={planet.diameter} 
                            name={planet.name} 
                            population={planet.population} 
                            rotation={planet.rotation_period}
                            climate={planet.climate} />
                        })}
                    </div>
                </div>
        </div>
    )
}

// https://swapi.dev/api/planets
// https://swapi.dev/api/people
// https://swapi.dev/api/starships
