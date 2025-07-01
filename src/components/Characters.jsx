import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Characters = () => {

    const { store, dispatch } = useGlobalReducer();


    const toggleFavorite = (name) => {
        dispatch({
            type: 'toggle_favorite',
            payload: name
        })
    };

    return (
        <div className="overflow-auto d-flex flex-nowrap gap-3" style={{ maxWidth: "100%" }}>
            {store.people?.length > 0 &&
                store.people.map(character => (
                    <div className="card shadow-sm border-0 rounded-4" key={character.uid} style={{ width: "18rem", flex: "0 0 auto" }}>
                        <img src="https://picsum.photos/400/200" className="card-img-top rounded-top-4" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-dark fw-bold">{character.name}</h5>
                            <p className="text-muted mb-3">ID: {character.uid}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={`/single/people/${character.uid}`} className="btn btn-outline-primary btn-sm">
                                    Learn more
                                </Link>
                                <button
                                    className={`btn ${store.favorites.includes(character.name) ? "btn-warning" : "btn-outline-warning"} btn-sm`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(character.name);
                                    }}
                                >
                                    ❤️
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
