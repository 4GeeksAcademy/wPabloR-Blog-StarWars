import { Link } from "react-router-dom";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Characters } from "../components/Characters.jsx";
import { Planets } from "../components/Planets.jsx";
import { Starships } from "../components/Starships.jsx";

export const Home = () => {


	return (
		<>
		<h1>Personajes</h1>
		<Characters/>
		<h1>Planetas</h1>
		<Planets/>
		<h1>Naves</h1>
		<Starships/>
		</>
	);
};
