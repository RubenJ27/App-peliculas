import type { ListMovieDetailsDataResponse } from '../../../models/interfaces/MovieInterface';

const Genre = ({ genres }: ListMovieDetailsDataResponse): JSX.Element => {
  console.log(genres);
  return (
    <div className="flex flex-row my-1">
      <span className="font-bold mr-1">Genero:</span>
      {genres?.map((value, index) => (
        <span key={index} className="mr-1">
          {`${value.name}${index !== genres.length - 1 ? ',' : ''}`}
        </span>
      ))}
    </div>
  );
};

export default Genre;
