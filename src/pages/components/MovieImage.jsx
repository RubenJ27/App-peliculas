const MovieImage = ({ url }) => {
  return (
    <div className="w-1/3 flex justify-center">
      <img src={url} className="w-80" alt="movie-details" />
    </div>
  );
};

export default MovieImage;
