import React, { useEffect, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [suggesstions, setSuggesstions] = useState([]);

  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

  useEffect(() => {
    console.log("SearchBar component mounted");
  }, []);

  const handleSubmit = (e) => {
    setSuggesstions([]);
    e.preventDefault();
    console.log(
      "Search submitted with query:",
      query,
      "year:",
      year,
      "type:",
      type,
    );
    onSearch(query, year, type);
  };

  const fetchSuggessionList = async (text) => {
    if (text.length < 3) {
      setSuggesstions([]);
      return;
    }
    try {
      const API = `http://www.omdbapi.com/?apikey=${apiKey}&s=${text}`;
      const response = await fetch(API);
      if (!response) {
        throw new Error("Faild to fetch suggesstions");
      }
      const data = await response.json();
      if (data.Response === "True") {
        setSuggesstions(data.Search || []);
      } else {
        setSuggesstions([{ Title: "No Movies Found", imdbID: "no-results" }]);
      }
    } catch (error) {
      console.error("Error fetching suggesstions:", error);
      setSuggesstions([
        { Title: "Error fetching suggestions", imdbID: "error" },
      ]);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSuggesstions([]);
      onSearch("", year, type);
    } else {
      fetchSuggessionList(value);
    }
  };

  const uniqueSuggestions = suggesstions.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.imdbID === movie.imdbID),
  );

  return (
    <div className="search-container p-4 rounded-xl shadow-md text-center relative">
      <input
        type="text"
        value={query || ""}
        onChange={handleChange}
        placeholder="Search for a movie"
        className="searchbar"
      />
      <input
        type="number"
        value={year || ""}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
        className="searchbar"
      />
      <select
        value={type || ""}
        onChange={(e) => setType(e.target.value)}
        className="searchbar"
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
      </select>
      <button className="btn-primary" onClick={handleSubmit}>
        Search
      </button>

      {uniqueSuggestions.length > 0 && (
        <ul className="suggessionList bg-gray-700 w-3xl m-auto mt-3 p-5 rounded-2xl absolute z-10 left-0 right-0">
          {uniqueSuggestions.map((movie) => {
            return (
              <li
                className="py-2 text-start border-b-1 cursor-pointer hover:text-black"
                key={`suggesstion-${movie.imdbID}`}
                onClick={() => {
                  setQuery(movie.Title);
                  setSuggesstions([]);
                  onSearch(movie.Title, year, type);
                }}
              >
                {movie.Title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default SearchBar;
