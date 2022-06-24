import { Link } from "react-router-dom";

// components
import Buscador from "./Buscador";


function Header(props) {


  return (
    <header >
      <nav className="navbar navbar-expand-xl navbar-black bg-black ">
      <p className="p-3 text-white display-6"> CINEX</p>
        <ul className="container-fluid"> 
          <div className="navbar-nav">
          <li className="nav-link">
            <Link  className="text-white bg-dark" to='/'>Home</Link>
          </li>
          <li className="nav-link">
            <Link className="text-white bg-dark" to='/listado'>Listado</Link>
          </li>
          <li className="nav-link">
            <Link className="text-white bg-dark" to='/favoritos'>Favoritos</Link>
          </li>
          {/* <li className="nav-link d-flex align-item-center" >
           <span className="text-success " >
            {props.favorites.length > 0 && <>Pelicula en Favoritos: { props.favorites.length}</> }
           </span>
          </li> */}
          </div>
        </ul>
        <Buscador/>
      </nav>
    </header>
  );
}

export default Header;
