import React from "react";
import { useParams } from "react-router-dom";

export default function VehicleDetails () {
    const {name} = useParams()

    return (
        <div className="container">
            <div className="row">
                <div className="col"><img src="..."></img></div>
                <div className="col">
                    <h3>{name}</h3>
                    <p>vehicle info....some vehicle info.... a paragraph of vehicle info... write some info here... yada yada yada</p>
                </div>
            </div>
            <div className="row">
                <div className="col">Manufacturer:</div>
                <div className="col">Model:</div>
                <div className="col">MGLT:</div>
                <div className="col">Class:</div>
                <div className="col">Length:</div>
                <div className="col">Cost:</div>
                <div className="col">Hyperdrive:</div>
            </div>
        </div>
    )
}