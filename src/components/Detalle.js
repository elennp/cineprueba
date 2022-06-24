import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";

function Detalle() {
  let token =sessionStorage.getItem('token');

  let query = new URLSearchParams(window.location.search);
  let ID= query.get('ID');

  const [movie,setMovie] = useState(null);

  useEffect(() => {
    const endPoint=`https://api.themoviedb.org/3/movie/${ID}?api_key=39589bbdbc401060bd0a0b0c42637834&language=es-ES` 
    
    axios.get(endPoint).then(response=>{
    const moviData= response.data;
    // cgl de apidata se convierte en la actualizacion del estado
    setMovie(moviData)
  })  

  .catch(error=>{
    console.log('Tuvimos Errores, intenta mas tarde') 
 })
 
  }, [ID]);

  return (
    <div>

       {!movie && <p>Cargando...</p>}
       {movie && 
      <div className="row" >
           <h2>Titulo:{movie.title}</h2>
        <div className="col-4"> <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movieposter" /></div>
        <div className="col-8">
          
          <h2>Fecha de Estreno:{ movie.release_date }</h2>
          <h2>Reseña:</h2>
          <p> { movie.overview }</p>
          <h2>Rating: {movie.vote_average}</h2>
          <h2>Generos:</h2>
          <ul>
              {movie. genres.map(oneGeneres=> <li key={oneGeneres.id}>{oneGeneres.name}</li>) }
              
          </ul>
        </div>
      </div>
      
    
     }

    </div>
  );
}

export default Detalle;