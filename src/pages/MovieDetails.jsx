import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerMovieDetails } from "../component/ShimmerMovieDetails";
import DefaultPostter from "../assets/Default-Poster.png";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const data = await response.json();
      //console.log(data);
      setMovieDetails(data);
    };
    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (!movieDetails) {
    return <ShimmerMovieDetails />;
  }

  const {
    Title,
    Actors,
    Awards,
    Country,
    Director,
    Language,
    Plot,
    Poster,
    Released,
    Writer,
    imdbID,
  } = movieDetails;

  return (
    <>
      <div className="movieDeatilsWrap grid grid-cols-12 gap-4 p-4 my-5 rounded-xl shadow-md bg-gray-800 flex items-center">
        <div className="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6 ">
          <img src={Poster && Poster !== "N/A" ? Poster : DefaultPostter} />
        </div>
        <div className="movieDetails col-span-12 lg:col-span-9 md:col-span-8 sm:col-span-6">
          <h1 className="text-2xl font-bold mb-4">{Title}</h1>
          <div className="my-4 movieMeta">
            <span>{Country}</span>
            <span>{Language}</span>
            <span>{Released}</span>
          </div>
          <p className="mb-4">
            <strong>Writer:</strong> {Writer}
          </p>
          <p className="mb-4">
            <strong>Actors: </strong>
            {Actors}
          </p>
          <p className="mb-4">
            <strong>Awards: </strong> {Awards}
          </p>

          <p>
            <strong>Director:</strong> {Director}
          </p>
          <p className="my-2"> {Plot}</p>

          <a
            className="btn-primary inline-block m-0 mt-3"
            href={`https://www.imdb.com/title/${imdbID}`}
            target="_blank"
            rel="noreferrer"
          >
            View on IMDb
          </a>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
