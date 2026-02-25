import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const MovieCard = ({ movie, onAddFavorites, onRemoveFavorite }) => {
  const { Title, Poster, imdbID } = movie;
  return (
    <div className="movie-card relative overflow-hidden">
      <Link to={`/movie/${imdbID}`}>
        <img src={Poster} className="w-full h-full object-cover" />
      </Link>
      <div className="absolute left-0 right-0 bottom-0 p-4 bg-gray-950 w-full text-start flex  justify-between gap-2">
        <h3>{Title}</h3>
        {onAddFavorites && (
          <button onClick={() => onAddFavorites(movie)}>
            <FaHeart />
          </button>
        )}
        {onRemoveFavorite && (
          <button onClick={() => onRemoveFavorite(movie.imdbID)}>
            <MdDelete />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
