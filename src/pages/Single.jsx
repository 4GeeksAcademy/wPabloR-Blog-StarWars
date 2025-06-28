import { Link, useParams } from "react-router-dom";   
import useGlobalReducer from "../hooks/useGlobalReducer";  

export const Single = () => {

  const { store } = useGlobalReducer()

 
  const { uid } = useParams()
  const singleCharacter = store.people.find(character => character.uid === uid);

  return (
    <div className="container text-center">
    
      <h1 className="display-4">Detalle de personaje</h1>

      <h3>{singleCharacter.name}</h3>
      <h4>UID: {uid}</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ipsam beatae quidem, doloremque voluptatem iusto laudantium quos ex impedit sit?</p>  
      
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};


