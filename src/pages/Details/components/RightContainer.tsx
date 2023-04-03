/* import Cast from "./Cast"; */
import Genre from "./Genre";
import Rating from "./Rating";
import type { ResponseMovies } from "../../../entities/moviesInterface";

type Props = Omit<ResponseMovies, "id">

const RightContainer = ({ title, ratings, protSummary, genres/* , cast */ }: Props) => {
  return (
    <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
      <h2 className="text-4xl font-bold my-1">{`${title?.title ?? "No disponible"} (${title?.year})`}</h2>
      {ratings && <Rating rating={ratings.rating} />}
      <p className="text-left">{protSummary?.text}</p>
      {genres !== undefined && genres?.length > 0 ? <Genre genres={genres} /> : (<p>Elemento no encontrado</p>)}
      {/* {cast?.length > 0 && <Cast cast={cast} />} */}
    </div>
  );
};

export default RightContainer;
