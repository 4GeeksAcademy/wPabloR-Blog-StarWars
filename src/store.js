export const initialStore=()=>{
  return{
    people:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

      case 'load_character':

      return{
        ...store,
        people: action.payload
      }
      
    default:
      throw Error('Unknown action.');
  }    
}
