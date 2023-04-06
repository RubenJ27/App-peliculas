import Genre from './Genre';
import type {
  PlotSummary,
  Title,
  RatingInterface,
  Cast,
} from '../../../models/moviesInterface';
import Casts from './Cast';
import Rating from './Rating';
interface Props {
  id?: string;
  title?: Title;
  ratings?: RatingInterface;
  protSummary?: PlotSummary;
  year?: string;
  genres?: string[];
  cast?: Cast[];
}

const RightContainer = ({
  title,
  ratings,
  protSummary,
  genres,
  cast,
}: Props): JSX.Element => {
  return (
    <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
      <h2 className="text-4xl font-bold my-1">
        {title?.title ?? 'No disponible'} {title?.year !== undefined ? `(${title.year})` : ''}
      </h2>
      {ratings !== undefined ? (
        <Rating rating={ratings.rating} />
      ) : (
        'Rating no disponible'
      )}
      <p className="text-left">{protSummary?.text}</p>
      {genres !== undefined && genres?.length > 0 ? (
        <Genre genres={genres} />
      ) : (
        <p>Elemento no encontrado</p>
      )}
      {cast !== undefined && cast?.length > 0 ? (
        <Casts cast={cast.slice(0, 20)} />
      ) : (
        'El cast no esta disponible'
      )}
    </div>
  );
};

export default RightContainer;
