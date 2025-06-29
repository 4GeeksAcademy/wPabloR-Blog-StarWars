import { Link } from "react-router-dom";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/`)
			.then(resp => resp.json())
			.then(data => {
				dispatch({
					type: 'load_character',
					payload: data.results
				});
			});
	}, []);

	const addFavorite = (name) => {
		dispatch({
			type: 'add_favorite',
			payload: name
		});
	};

	return (
		<div className="d-flex flex-wrap justify-content-center gap-3">
			{store.people?.length > 0 &&
				store.people.map(character => {
					const isFav = store.favorites.includes(character.name);
					return (
						<div className="card" style={{ width: "18rem" }} key={character.uid}>
							<img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{character.name}</h5>
								<p>{character.uid}</p>
								<Link to={`/single/${character.uid}`} className="btn btn-primary">Learn more</Link>
								<button
									className={`float-end ${isFav ? "btn btn-warning" : "btn btn-outline-warning"}`}
									onClick={(e) => {
										e.stopPropagation();
										addFavorite(character.name);
									}}
								>
									❤️
								</button>
							</div>
						</div>
					);
				})}
		</div>
	);
};
