export const initialStore = () => {
  return {
    people: [],
    favorites: [],
    planets: [],
    starships: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'load_characters':

      return {
        ...store,
        people: action.payload
      }

    case 'toggle_favorite':

      if (store.favorites.includes(action.payload)) {
        return {
          ...store,
          favorites: store.favorites.filter(fav => fav !== action.payload)
        };
      } else {
        return {
          ...store,
          favorites: [...store.favorites, action.payload]
        }
      }

    case 'delete_favorite':

      return {
        ...store,
        favorites: store.favorites.filter((fav, index) => index !== action.payload)
      }

    case 'load_planets':

      return {
        ...store,
        planets: action.payload
      }

    case 'load_starships':

      return {
        ...store,
        starships: action.payload
      }

    default:
      throw Error('Unknown action.');
  }
}
