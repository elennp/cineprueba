import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert";



function Listado (props) {

    let token =sessionStorage.getItem('token');
    const [moviesList,setMoviesList]=useState([])
  useEffect(()=>{

  const endPonint='https://api.themoviedb.org/3/movie/550?api_key=f33c2aaa54ccebeb7985121fd433907b'
  axios.get(endPonint)
  .then(response=>{
    const apiData= response.data;
    
    setMoviesList(apiData.results)
    console.log(apiData.results)
  })  

  .catch(error=>{
     Swal(<h1>Tuvimos Errores, intenta mas tarde</h1>) 
 })
    
},[setMoviesList])
    return(
<div className="row">
     {moviesList.map((oneMovie,idx)=>{
         return(
         
          <div className="col-3" key={idx}>
            <div className="card my-4">
              <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
              <button className="favourite-btn" onClick={ (e) =>props.addOrRemoveFromFavs(e)} 
              data-movie-id ={oneMovie.id}
              >🖤</button>
              <div className="card-body">
                <h5 className="card-title">{oneMovie.title}</h5>
                <p className="card-text">{oneMovie.overview.substring(0,100)} ... </p>
                <Link to={`/detalle?ID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
              </div>
            </div>
          </div>
        
         )
       })
     }
     </div>
    );
}
export default Listado;