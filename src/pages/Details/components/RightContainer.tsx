import type {
  Cast,
  ListMovieDetailsDataResponse,
  PlotSummary,
  RatingInterface,
  Title,
} from '../../../models/moviesInterface';
import Genre from './Genre';
interface Props {
  id?: string;
  title?: Title;
  ratings?: RatingInterface;
  protSummary?: PlotSummary;
  year?: string;
  genres?: string[];
  cast?: Cast[];
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const RightContainer = ({ title, genres, release_date, overview }: ListMovieDetailsDataResponse): JSX.Element => {
  const removeStringDateMovie = release_date?.toString();
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  const textYearMovie = removeStringDateMovie?.slice(0, 4);
  return (
    <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
      <h2 className="text-4xl font-bold my-1">
        {title ?? 'No disponible'} {textYearMovie !== undefined ? `(${textYearMovie})` : ''}
      </h2>
      {/* {ratings !== undefined ? <Rating rating={ratings.rating} /> : 'Rating no disponible'}
      <p className="text-left">{protSummary?.text}</p> */}
      {genres !== undefined && genres?.length > 0 ? <Genre genres={genres} /> : <p>Elemento no encontrado</p>}
      {/* {cast !== undefined && cast?.length > 0 ? <Casts cast={cast.slice(0, 20)} /> : 'El cast no esta disponible'} */}
      <div>
        <span className="font-bold mr-1">Description:</span>
        <span className="mr-1">{overview ?? 'Sin descripcion'}</span>
      </div>
    </div>
  );
};

export default RightContainer;
