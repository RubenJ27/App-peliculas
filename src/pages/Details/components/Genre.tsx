import type { ResponseMovies } from '../../../models/moviesInterface';

const Genre = ({ genres }: ResponseMovies): JSX.Element => {
  return (
    <div className="flex flex-row my-1">
      <span className="font-bold mr-1">Genero:</span>
      {genres?.map((value, index) => (
        <span key={index} className="mr-1">
          {`${value}${index !== genres.length - 1 ? ',' : ''}`}
        </span>
      ))}
    </div>
  );
};

export default Genre;
