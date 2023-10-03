import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "HTTPS://www.omdbapi.com/?i=tt3896198&apikey=7994e036";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  const searchMovies = async (title) => {
    const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=7994e036";
  
    console.log('Searching for:', title);
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <div className="app">
      <h1>I FLIX</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {console.log('Search icon clicked');searchMovies(searchTerm);}}
        />

      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
