import { Link } from "react-router-dom";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Planets = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/`)
            .then(resp => resp.json())
            .then(data => {
                dispatch({
                    type: 'load_planets',
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
            {store.planets?.length > 0 &&
                store.planets.map(planet => (
                        <div className="card" style={{ width: "18rem", flex: "0 0 auto" }} key={planet.uid}>
                            <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p>ID: {planet.uid}</p>
                                <Link to={`/single/planets/${planet.uid}`} className="btn btn-primary">Learn more</Link>
                                <button
                                    className={`float-end ${store.favorites.includes(planet.name) ? "btn btn-warning" : "btn btn-outline-warning"}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addFavorite(planet.name);
                                    }}>
                                    ❤️
                                </button>
                            </div>
                        </div>
                ))}
        </div>
    );
};
