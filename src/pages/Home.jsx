import React, { useEffect } from "react";
import MovieCard from "../component/MovieCard";
import SearchBar from "../component/SearchBar";

const Home = () => {
  const [movies, setMovies] = React.useState([]);
  const [favorites, setFavorites] = React.useState(() => {
    const saved = localStorage.getItem("Favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [message, setMessage] = React.useState("");

  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  console.log("API Key", import.meta.env.VITE_MOVIE_API_KEY);

  const fetchDefaultMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=avengers`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch default movies");
    }
    const data = await response.json();
    setMovies(data.Search || []);
  };

  useEffect(() => {
    if (movies.length === 0) {
      fetchDefaultMovies();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(favorites));
    console.log("Favorites updated:", favorites);
  }, [favorites]);

  const searchMovies = async (query, year, type) => {
    if (!query) {
      fetchDefaultMovies();
      return;
    }
    console.log("Searching for movies with query:", query);
    const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${query}&y=${year}&type=${type}`;
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    setMovies(data.Search || []);
    //console.log("Movies found:", data);
  };

  const addFavorites = (favMovie) => {
    if (!favorites.find((fav) => fav.imdbID === favMovie.imdbID)) {
      setFavorites([...favorites, favMovie]);
      setMessage(`${favMovie.Title} added to favorites!`);
    } else {
      setMessage(`${favMovie.Title} already in favorites!`);
    }
    setTimeout(() => {
      setMessage("");
    }, 3000);
    //console.log("Favorites:", favorites);
  };

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchBar onSearch={searchMovies} />
      {message && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md shadow-md">
          <p className="message">{message}</p>
        </div>
      )}
      <div className="movies-container grid grid-cols-4 gap-4">
        {movies.map((movie, index) => {
          return (
            <MovieCard
              key={`movie-${index}`}
              movie={movie}
              onAddFavorites={addFavorites}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
