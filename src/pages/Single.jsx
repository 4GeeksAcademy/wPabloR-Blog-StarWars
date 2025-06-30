import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const Single = () => {

  const { store } = useGlobalReducer()


  const { type, uid } = useParams()
  const single = store[type]?.find(element => element.uid === uid);
  const [details, setDetails] = useState(null)

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${uid}`)
      .then(resp => resp.json())
      .then(data => setDetails(data.result.properties))
  }, [type, uid])


  return (

    <div className="container text-center">

      <h1 className="display-4">Detalle de {type == "people" ? "personaje" : type == "planets" ? "planeta" : type == "starships" ? "nave" : "elemento"}</h1>

      <h3>{single.name}</h3>
      <h5>UID: {uid}</h5>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ipsam beatae quidem, doloremque voluptatem iusto laudantium quos ex impedit sit?</p>

      {details && type === "people" && (
        <div className="mt-4">
          <p><b>Gender: </b>{details.gender}</p>
          <p><b>Skin Color</b>: {details.skin_color}</p>
          <p><b>Hair Color:</b> {details.hair_color}</p>
          <p><b>Height:</b> {details.height} cm</p>
        </div>
      )}

      {details && type === "planets" && (
        <div className="mt-4">
          <p><b>Climate: </b>{details.climate}</p>
          <p><b>Terrain:</b> {details.terrain}</p>
          <p><b>Diameter:</b> {details.diameter} km</p>
          <p><b>Orbital Period:</b> {details.orbital_period} days</p>
          <p><b>Population:</b> {details.population}</p>
        </div>
      )}

      {details && type === "starships" && (
        <div className="mt-4">
          <p><b>Cargo Capacity:</b> {details.cargo_capacity}</p>
          <p><b>Length:</b> {details.length} m</p>
          <p><b>Manufacturer:</b> {details.manufacturer}</p>
          <p><b>Crew:</b> {details.crew}</p>
          <p><b>Starship_class:</b> {details.starship_class} cm</p>
        </div>
      )}




      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};


