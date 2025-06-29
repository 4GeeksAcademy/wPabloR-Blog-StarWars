export const initialStore=()=>{
  return{
    people:[],
    favorites:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

      case 'load_character':

      return{
        ...store,
        people: action.payload
      }

      case 'add_favorite':
        
      if (store.favorites.includes(action.payload)) return store;
        return{
          ...store,
          favorites: [...store.favorites, action.payload]
        }

      case 'delete_favorite':
        
      return{
        ...store,
        favorites: store.favorites.filter((fav, index) => index !== action.payload) 
      }
      
    default:
      throw Error('Unknown action.');
  }    
}
