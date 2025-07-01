import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const Single = () => {
  const { store } = useGlobalReducer();
  const { type, uid } = useParams();
  const single = store[type]?.find((element) => element.uid === uid);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${uid}`)
      .then((resp) => resp.json())
      .then((data) => setDetails(data.result.properties));
  }, [type, uid]);


  return (
    <div className="container my-5">
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <img
            src="https://picsum.photos/700/400"
            alt={single?.name}
            className="img-fluid rounded-4 shadow"
          />
        </div>


        <div className="col-md-6">
          <h1 className="text-black mb-1">{single?.name}</h1>
          <p className="text-muted">UID: {uid}</p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti molestiae alias earum quisquam obcaecati pariatur illo eius quia. Temporibus, doloribus consequatur modi dolor possimus dignissimos placeat accusamus, adipisci iusto fuga ut reprehenderit commodi soluta officia hic, aspernatur quos mollitia? Iusto vel distinctio ipsa reprehenderit quae, sit ea excepturi sapiente quas.
          </p>

          {details && type === "people" && (
            <ul className="list-unstyled">
              <li><strong>Gender:</strong> {details.gender}</li>
              <li><strong>Skin Color:</strong> {details.skin_color}</li>
              <li><strong>Hair Color:</strong> {details.hair_color}</li>
              <li><strong>Height:</strong> {details.height} cm</li>
            </ul>
          )}

          {details && type === "planets" && (
            <ul className="list-unstyled">
              <li><strong>Climate:</strong> {details.climate}</li>
              <li><strong>Terrain:</strong> {details.terrain}</li>
              <li><strong>Diameter:</strong> {details.diameter} km</li>
              <li><strong>Orbital Period:</strong> {details.orbital_period} days</li>
              <li><strong>Population:</strong> {details.population}</li>
            </ul>
          )}

          {details && type === "starships" && (
            <ul className="list-unstyled">
              <li><strong>Cargo Capacity:</strong> {details.cargo_capacity}</li>
              <li><strong>Length:</strong> {details.length} m</li>
              <li><strong>Manufacturer:</strong> {details.manufacturer}</li>
              <li><strong>Crew:</strong> {details.crew}</li>
              <li><strong>Starship Class:</strong> {details.starship_class}</li>
            </ul>
          )}

          <Link to="/" className="btn btn-outline-primary mt-4">
            ⬅️ Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};
