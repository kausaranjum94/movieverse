const ShimmerMovieCard = () => {
  return (
    <div className="movie-card relative overflow-hidden animate-pulse bg-gray-800 rounded-md">
      <div className="w-full h-64 bg-gray-700"></div>
      <div className="absolute left-0 right-0 bottom-0 p-4 bg-gray-900 w-full flex justify-between">
        <div className="h-4 w-24 bg-gray-700 rounded"></div>
        <div className="h-6 w-6 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default ShimmerMovieCard;
