export const ShimmerMovieDetails = () => {
  return (
    <div className="movieDeatilsWrap grid grid-cols-12 animate-pulse gap-4 p-4 my-5 rounded-xl shadow-md bg-gray-800 flex items-center">
      <div className="col-span-3 bg-gray-700 h-64 rounded"></div>
      <div className="movieDetails col-span-9 rounded">
        <div className="bg-gray-700 h-7 p-4 w-full my-4 rounded"></div>
        <div className="bg-gray-700 h-7 p-4 w-full my-4 rounded"></div>
        <div className="bg-gray-700 h-7 p-4 w-full my-4 rounded"></div>
        <div className="bg-gray-700 h-7 p-4 w-full my-4 rounded"></div>
      </div>
    </div>
  );
};
