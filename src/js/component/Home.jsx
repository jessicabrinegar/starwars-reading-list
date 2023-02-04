import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx"

//create your first component
const Home = () => {
	return (
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	);
};
export default Home;
