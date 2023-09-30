import React from 'react';
import { useEffect } from 'react';
import "./App.css";
import  SearchIcon from './search.svg';

const API_URL ="http://www.omdbapi.com?apikey=7994e036";

const App =() =>{

  const searchMovies = async(tittle)=>{
const response = await fetch (`${API_URL}&s=${tittle}`);
const data = await response.json();

console.log(data.searchMovies);
  }
  useEffect(()=>{
    searchMovies('spiderman');
  },[]);
  return (
    <div className= 'App'>
     <h1>I FLIX</h1> 
<div className="search">
  <input
   placeholder='search for movies'
  value="superman"
  onChange={() =>{}} 
  />
  <img
  src ={SearchIcon}alt='movie searched'
  onClick={() => {}}
  />{/*
</div>
<div className='container'>
  <div
    className='movie'/>
    <div >
      <p1>{movie1.year}</p1>
    </div>
    <div>
      <img src ={Poster!=="N/A" ?movie1.Poster :"https:/via.placeholder.com/400"}alt={movie.tittle} />
    </div>
    <div>
      <span>{movie1.Type}</span>
      <h3> {movie1.Tittle}</h3>
    </div>
  */}
</div>
    </div>

  )
}


export default App;