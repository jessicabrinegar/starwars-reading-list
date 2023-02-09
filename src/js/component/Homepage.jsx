import React from "react";
import { Outlet } from "react-router-dom"
import CharCard from "./CharCard.jsx"
import VehicleCard from "./VehicleCard.jsx"
import PlanetCard from "./PlanetCard.jsx"

export default function Homepage ({planets, characters, vehicles}) {

    return (
        <div className="d-block text-start">
            <h3>Characters</h3>
                <div className="container horizontal-scrollable">
                    <div className="row flex-nowrap">
                        {characters.map((char, index)=> {
                            return <CharCard key={char.name} 
                            name={char.name} 
                            birth={char.birth_year} 
                            height={char.height} 
                            mass={char.mass}
                            hair={char.hair_color}
                            eye={char.eye_color}
                            index={index}/>
                        })}
                    </div>
                </div>
            <h3>Starships</h3>
                <div className="container horizontal-scrollable">
                    <div className="row flex-nowrap">
                        {vehicles.map((vehicle, index)=> {
                            return <VehicleCard key={vehicle.name} 
                            name={vehicle.name} 
                            manufacturer={vehicle.manufacturer} 
                            mglt={vehicle.MGLT} 
                            model={vehicle.model}
                            index={index}/>
                        })}
                    </div>
                </div>
            <h3>Planets</h3>
                <div className="container horizontal-scrollable">
                    <div className="row flex-nowrap">
                        {planets.map((planet, index) => {
                            return <PlanetCard key={planet.name} 
                            name={planet.name} 
                            population={planet.population} 
                            rotation={planet.rotation_period}
                            climate={planet.climate} 
                            index={index} />
                        })}
                    </div>
                </div>
            <Outlet></Outlet>
        </div>
    )
}
