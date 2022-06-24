
import { Link } from "react-router-dom";

function Favoritos (props) {
 

  return (
      <>
       <h2>Favoritos</h2>
       <div className="row">
         {!props.favorites.length && <div className="col-12 text-danger"> No tenes nada en favoritos </div>}
     {props.favorites.map((oneMovie,idx)=>{
         return(
         
          <div className="col-3" key={idx}>
            <div className="card my-4">
              <img src={oneMovie.imgURL} className="card-img-top" alt="..." />
              <button className="favourite-btn" onClick={(e) =>props.addOrRemoveFromFavs(e)} 
              data-movie-id ={oneMovie.id}
              >🖤</button>
              <div className="card-body">
                <h5 className="card-title">{oneMovie.titulo}</h5>
                <p className="card-text">{oneMovie.overview.substring(0,100)} ... </p>
                <Link to={`/detalle?ID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
              </div>
            </div>
          </div>
        
         )
       })
     }
     </div>
      </>
   
  )
}

export default Favoritos