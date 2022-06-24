import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert";
import axios from "axios";

function Resultados(props) {

  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=f33c2aaa54ccebeb7985121fd433907b&language=es-ES&query=${keyword}`;
    axios
      .get(endPoint)
      .then((response) => {
        const moviArray = response.data.results;
        if (moviArray.length ===0) {
            Swal(<h1>No Obtuvimos Ningun Resultado</h1>)   
        }
        // cgl de apidata se convierte en la actualizacion del estado
        setMovieResults(moviArray);
      })
      .catch((error) => console.log(error));
  },[keyword]);

  return (
    <>
      <h2>
        Buscaste:<em>{keyword}</em>
      </h2>
     {movieResults.length === 0 && <h3>No hay resultados </h3>}
      <div className="row">
        {movieResults.map((oneMovie, idx) => {
          return (
            <div className="col-4" key={idx}>
              <div className="card my-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 100)} ...{" "}
                  </p>
                  <Link to={`/detalle?ID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Resultados;