import { imageUrlMoviesList } from '../../../../core/helpers/imageUrl';
import { Results } from '../../types';

const ResultListSearchItems = ({ id, title, poster_path, onListItemClick }: Results): JSX.Element => {
  const handleListItemClick = (): void => {
    onListItemClick!(id ?? '');
  };

  return (
    <li className="list-none">
      <button key={id} onClick={handleListItemClick} className="flex flex-col items-center mt-10">
        <div className="flex flex-col w-[230px] h-[345px] mb-2">
          {poster_path !== undefined && poster_path !== null ? (
            <img src={imageUrlMoviesList(poster_path)} alt={title} className="w-[320px] h-[450px] rounded-lg" />
          ) : (
            <img src={'/nodisponible.png'} alt={title} className="w-[230px] h-[345px] rounded-lg" />
          )}
        </div>
        <div className="flex flex-col text-center w-3/4 h-full">
          <p className="break-all font-normal text-center font-lato text-3xl mt-2">{title ?? 'Sin titulo'}</p>
        </div>
      </button>
    </li>
  );
};

export default ResultListSearchItems;
