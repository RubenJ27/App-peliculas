import { Cast } from '../../types';

interface Props {
  cast?: Cast[];
}

const Casts = ({ cast }: Props): JSX.Element => {
  return (
    <div className="flex flex-row my-1 flex-wrap">
      <span className="font-bold mr-1">Cast:</span>
      {cast?.map(({ name }, index) => (
        <span key={index} className="mr-1">
          {`${name ?? 'No hay un cast disponible'}${index !== cast.length - 1 ? ',' : ''}`}
        </span>
      ))}
    </div>
  );
};

export default Casts;
