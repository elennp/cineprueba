import React from "react";
import { useEffect, useState } from "react";
import {Routes,Route } from "react-router-dom";
// import Login from "./components/Login";
import Listado from "./components/Listado";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle"
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
import Search from "./components/Search";
import './App.css';
import "./components/bootstrap.min.css";

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
    <div>

   <Navbar/>
   <Search/>
   <Routes>
     
   {/* <Route path="/"  element= {<Login/>}/> */}
     <Route path="/listado"  element= { <Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
     <Route path="/detalle"  element= {<Detalle/>}/>
     <Route path="/resultados"  element= {<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
     <Route path="/favoritos"  element= {<Favoritos favorites ={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
     
   </Routes>
    <Footer/> 
  
   </div>
    
  );
}

export default App;
