import ShimmerMovieCard from "./ShimmerMovieCard";

export const ShimmerMovieGrid = () => {
  return (
    <div className="movies-container grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-5">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <ShimmerMovieCard key={index} />
        ))}
    </div>
  );
};
