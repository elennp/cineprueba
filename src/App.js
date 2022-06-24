import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./componentes/Login";
import Listado from "./componentes/Listado";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Detalle from "./componentes/Detalle";
import Resultados from "./componentes/Resultados";
import Favoritos from "./componentes/Favoritos";

import './componentes/CSS/app.css';
import "./componentes/CSS/bootstrap.min.css";

function App() {

  const [favorites,setFavorites]=useState([])

useEffect(() =>{

    const favInLocal =  localStorage.getItem('favs')
    console.log(favInLocal)
    if (favInLocal != null) {
        const favsArray = JSON.parse(favInLocal)
        setFavorites(favsArray)
        console.log(favsArray)
    }
},[])

  const addOrRemoveFromFavs = e =>{

    console.log(e)
    const favMovies =  localStorage.getItem('favs')

    let tempMoviesFavs;
 
    if(favMovies === null){
       tempMoviesFavs = []
 
    }else{
 tempMoviesFavs = JSON.parse(favMovies)
    }
 console.log(
   tempMoviesFavs
 )


    const btn = e.currentTarget;
    const parent = btn.parentElement
    const imgURL = parent.querySelector('img').getAttribute('src')
    const titulo = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
   
    const movieData = {
      imgURL,titulo,overview,
      id : btn.dataset['movieId']
    }
    
    let movieInArray = tempMoviesFavs.find(oneMovie =>{
      return oneMovie.id === movieData.id
    })
   if (!movieInArray) {
      
       tempMoviesFavs.push(movieData)
   localStorage.setItem('favs', JSON.stringify(tempMoviesFavs))
   setFavorites(tempMoviesFavs)
   console.log('Se Agrego la pelicula')
  
  }else{
    let movieLeft = tempMoviesFavs.filter(oneMovie => {
      return oneMovie.id !== movieData.id
    })
    localStorage.setItem('favs', JSON.stringify(movieLeft))
    setFavorites(movieLeft)
    console.log('Se Elimino la pelicula')
  }
   
  }

  return (
    <BrowserRouter>

   <Header/>
   
   <Routes>
     
   <Route path="/"  element= {<Login/>}/>
     <Route path="/listado"  element= { <Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
     <Route path="/detalle"  element= {<Detalle/>}/>
     <Route path="/resultados"  element= {<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
     <Route path="/favoritos"  element= {<Favoritos favorites ={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
     
   </Routes>
    <Footer/> 
  
   </BrowserRouter>
    
  );
}

export default App;
