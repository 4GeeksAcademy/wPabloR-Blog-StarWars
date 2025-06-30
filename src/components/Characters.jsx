import { Link } from "react-router-dom";
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Characters = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/`)
            .then(resp => resp.json())
            .then(data => {
                dispatch({
                    type: 'load_characters',
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
            {store.people?.length > 0 &&
                store.people.map(character => (
                        <div className="card" style={{ width: "18rem", flex: "0 0 auto" }} key={character.uid}>
                            <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p>ID: {character.uid}</p>
                                <Link to={`/single/people/${character.uid}`} className="btn btn-primary">Learn more</Link>
                                <button
                                    className={`float-end ${store.favorites.includes(character.name) ? "btn btn-warning" : "btn btn-outline-warning"}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addFavorite(character.name);
                                    }}>
                                    ❤️
                                </button>
                            </div>
                        </div>
                ))}
        </div>
    );
};
