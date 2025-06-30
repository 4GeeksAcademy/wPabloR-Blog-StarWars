import { Link } from "react-router-dom";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Starships = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/`)
            .then(resp => resp.json())
            .then(data => {
                dispatch({
                    type: 'load_starships',
                    payload: data.results
                });
            });
    }, []);

    const addFavorite = (name) => {
        dispatch({
            type: 'add_favorite',
            payload: name
        })
    };

    return (
        <div className="overflow-auto d-flex flex-nowrap gap-3" style={{maxWidth: "100%"}}>
            {store.starships?.length > 0 &&
                store.starships.map(starship => (
                        <div className="card" style={{ width: "18rem", flex: "0 0 auto" }} key={starship.uid}>
                            <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{starship.name}</h5>
                                <p>ID: {starship.uid}</p>
                                <Link to={`/single/starships/${starship.uid}`} className="btn btn-primary">Learn more</Link>
                                <button
                                    className={`float-end ${store.favorites.includes(starship.name) ? "btn btn-warning" : "btn btn-outline-warning"}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addFavorite(starship.name);
                                    }}>
                                    ❤️
                                </button>
                            </div>
                        </div>
                ))}
        </div>
    );
};
