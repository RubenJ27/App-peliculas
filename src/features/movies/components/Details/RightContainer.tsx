import { ListMovieDetailsDataResponse } from '../../types';
import Genre from './Genre';

const RightContainer = ({ title, genres, release_date, overview }: ListMovieDetailsDataResponse): JSX.Element => {
  const removeStringDateMovie = release_date?.toString();
  const textYearMovie = removeStringDateMovie?.slice(0, 4);
  return (
    <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
      <h2 className="text-4xl font-bold my-1">
        {title ?? 'No disponible'} {textYearMovie !== undefined ? `(${textYearMovie})` : ''}
      </h2>
      {genres !== undefined && genres?.length > 0 ? <Genre genres={genres} /> : <p>Elemento no encontrado</p>}
      <div>
        <span className="font-bold mr-1">Description:</span>
        <span className="mr-1">{overview ?? 'Sin descripcion'}</span>
      </div>
    </div>
  );
};

export default RightContainer;
