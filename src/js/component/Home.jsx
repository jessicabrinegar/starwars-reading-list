import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx"

//create your first component
const Home = () => {
	return (
		<div className="container text-center w-75">
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</div>
	);
};
export default Home;
