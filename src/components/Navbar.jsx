import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	const deleteFav = (indexToDelete) => {
		dispatch({
			type: 'delete_favorite',
			payload: indexToDelete
		})
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars Blog</span>
				</Link>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
						Favorites "{store.favorites.length}"
					</button>
					<ul className="dropdown-menu" data-bs-auto-close="outside">
						{store.favorites.length === 0 ? (
							<li>No favorites yet</li>) :
							(store.favorites.map((fav, index) => (
								<li key={index} className="dropdown-item">{fav}
									<button
										className="btn btn-sm btn-outline-danger float-end ms-2"
										onClick={(e) => {
											e.stopPropagation();
											deleteFav(index);
										}}
									>
										🗑️
									</button>

								</li>
							)))
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};