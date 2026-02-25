import React, { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("Favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const removeFavorite = (movieId) => {
    const newFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(newFavorites);
    localStorage.setItem("Favorites", JSON.stringify(newFavorites));
  };

  return (
    <div className="movies-container grid grid-cols-4 gap-4 mt-6">
      {favorites.length === 0 ? (
        <p>No favorites found</p>
      ) : (
        favorites.map((movie) => {
          return (
            <MovieCard
              key={`favorite-${movie.imdbID}`}
              movie={movie}
              onRemoveFavorite={removeFavorite}
            />
          );
        })
      )}
    </div>
  );
};
