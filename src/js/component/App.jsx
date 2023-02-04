import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./Nav.jsx"
import Footer from "./Footer.jsx"
import Characters from "./Characters.jsx"

export default function App () {

    return (
        <div className="container text-center w-100">
            <NavBar/>
            <Characters/>
            <Footer/>
        </div>
    )
}