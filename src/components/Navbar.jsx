import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { FaJediOrder } from "react-icons/fa";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const deleteFav = (indexToDelete) => {
    dispatch({
      type: 'delete_favorite',
      payload: indexToDelete
    });
  };

  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <FaJediOrder size={32} />
		   <span className="fw-bold">Star Wars Blog</span>
        </Link>

        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Favorites <span className="badge bg-warning text-dark ms-2">{store.favorites.length}</span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="favoritesDropdown"
          >
            {store.favorites.length === 0 ? (
              <li className="dropdown-item text-muted">No favorites yet</li>
            ) : (
              store.favorites.map((fav, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  <span>{fav}</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger ms-3"
                    aria-label={`Remove ${fav} from favorites`}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteFav(index);
                    }}
                  >
                    🗑️
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
