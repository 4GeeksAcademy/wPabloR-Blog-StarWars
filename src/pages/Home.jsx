import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Characters } from "../components/Characters.jsx";
import { Planets } from "../components/Planets.jsx";
import { Starships } from "../components/Starships.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {
		Promise.all([
			fetch('https://www.swapi.tech/api/people/').then(resp => resp.json()),
			fetch('https://www.swapi.tech/api/planets/').then(resp => resp.json()),
			fetch('https://www.swapi.tech/api/starships/').then(resp => resp.json())
		]).then(([peopleData, planetsData, starshipsData]) => {
			dispatch({ type: 'load_characters', payload: peopleData.results });
			dispatch({ type: 'load_planets', payload: planetsData.results });
			dispatch({ type: 'load_starships', payload: starshipsData.results });
		});
	}, []);


	return (
		<div className="bg-dark text-white min-vh-100 py-5">
			<section className="bg-light text-dark rounded shadow-sm p-4 mb-5 mx-5 ">
				<h2 className="text-center text-uppercase fw-bold text-secondary mb-4">Characters</h2>
				<Characters />
			</section>

			<section className="bg-light text-dark rounded shadow-sm p-4 mb-5 mx-5">
				<h2 className="text-center text-uppercase fw-bold text-secondary mb-4">Planets</h2>
				<Planets />
			</section>

			<section className="bg-light text-dark rounded shadow-sm p-4 mb-5 mx-5">
				<h2 className="text-center text-uppercase fw-bold text-secondary mb-4">Starships</h2>
				<Starships />
			</section>
		</div>
	);
};