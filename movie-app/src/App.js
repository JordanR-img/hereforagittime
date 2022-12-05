import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=6b007762";

// 6b007762
export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const movie = {
    Title: "Aliens of the Deep",
    Year: "2005",
    imdbID: "tt0417415",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk2NjU2ODA1M15BMl5BanBnXkFtZTcwNzI0NDcyMQ@@._V1_SX300.jpg",
  };

  useEffect(() => {
    searchMovies("Aliens");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchTerm)}} />
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
}
