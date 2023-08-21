export interface PropsMessageLoading {
  messageLoading: string;
}

export interface Image {
  height?: number;
  id?: string;
  url?: string;
  width?: number;
}

export interface Title {
  image?: Image;
  title?: string;
  year?: number;
}

export interface RatingInterface {
  canRate?: boolean;
  rating?: number;
  ratingCount?: number;
}

export interface PlotSummary {
  author: string;
  id: string;
  text: string;
}

export interface ResponseMovies {
  id?: string;
  title?: Title;
  ratings?: RatingInterface;
  protSummary?: PlotSummary;
  year?: string;
  genres?: string[];
}
interface ImageUrlData {
  height?: number;
  imageUrl?: string;
  width?: number;
}
/* export interface ResultListData {
  data?: MoviesListData[];
  onListItemClick: (movieId: string) => void;
} */
export interface ResultListItemsData {
  id?: string;
  title?: string;
  image?: ImageUrlData;
  onListItemClick: (movieId: string) => void;
}
export interface MoviesListData {
  i?: ImageUrlData;
  id?: string;
  l?: string;
  q?: string;
  qid?: string;
  rank?: number;
  s?: string;
  y?: number;
}
export interface MoviesList {
  movie?: MoviesListData[];
}
export interface Role {
  character: string;
  characterId?: string;
}

export enum Category {
  Actor = 'actor',
  Actress = 'actress',
  AnimationDepartment = 'animation_department',
  ArtDepartment = 'art_department',
  ArtDirector = 'art_director',
  AssistantDirector = 'assistant_director',
  CameraDepartment = 'camera_department',
  CastingDepartment = 'casting_department',
  CastingDirector = 'casting_director',
  Cinematographer = 'cinematographer',
  Composer = 'composer',
  CostumeDepartment = 'costume_department',
  CostumeDesigner = 'costume_designer',
  Director = 'director',
  Editor = 'editor',
  EditorialDepartment = 'editorial_department',
  LocationManagement = 'location_management',
  MakeUpDepartment = 'make_up_department',
  Miscellaneous = 'miscellaneous',
  MusicDepartment = 'music_department',
  Producer = 'producer',
  ProductionDesigner = 'production_designer',
  ProductionManager = 'production_manager',
  ScriptDepartment = 'script_department',
  SetDecorator = 'set_decorator',
  SoundDepartment = 'sound_department',
  SpecialEffects = 'special_effects',
  Stunts = 'stunts',
  Thanks = 'thanks',
  TransportationDepartment = 'transportation_department',
  VisualEffects = 'visual_effects',
  Writer = 'writer',
}

export enum Attr {
  Creator = 'creator',
  Uncredited = 'uncredited',
}

export interface Cast {
  id?: string;
  image?: Image;
  legacyNameText?: string;
  name?: string;
  category?: Category;
  characters?: string[];
  endYear?: number;
  episodeCount?: number;
  roles?: Role[];
  startYear?: number;
  akas?: string[];
  disambiguation?: string;
  attr?: Attr[];
  job?: string;
  freeTextAttributes?: string[];
}

export interface Base {
  id: string;
  image: Image;
  runningTimeInMinutes: number;
  nextEpisode: string;
  numberOfEpisodes: number;
  seriesEndYear: number;
  seriesStartYear: number;
  title: string;
  titleType: string;
  year: number;
}

export interface FullCredits {
  id?: string;
  base?: Base;
  cast?: Cast[];
  /* crew?: { [key: string]: Cast[] }; */
}

/* export interface MoviesState {
  moviesList?: MoviesListData[];
  movies?: MoviesListData[];
  data?: MoviesList[];
  isLoadingGetOnlineMovieDataBaseAutoComplete: boolean;
  overviewDetails: ResponseMovies;
  isLoadingOverviewDetails: boolean;
  errorOverviewDetails: null;
  fullCredits: FullCredits;
  isLoadingFullCredits: boolean;
  errorFullCredits: null;
  movieId: string;
  moviesTrendingDay: ResultListTrendingData;
  isLoadingMoviesTrendingDay: boolean;
  errorMoviesTrendingDay: null;
} */

/* nuevas interfaces */

/* trending movies */

export interface ListTrendingDataResponse {
  page?: number;
  results?: Results[];
  total_pages?: number;
  total_results?: number;
}

export interface ResultListTrendingData {
  data?: ListTrendingDataResponse;
  onListItemClick?: (movieId: number) => void;
  loading?: boolean;
}
export interface BelongsToCollection {
  id?: number;
  name?: string;
  poster_path?: string;
  backdrop_path?: null;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ListMovieDetailsDataResponse {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: BelongsToCollection;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date?: Date;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface ResultMovieDetailsData {
  data?: ListMovieDetailsDataResponse;
}

/* trending movies */

/* Generic type list movies */
export interface ListMoviesResponse<T> {
  page?: number;
  results?: T[];
  total_pages?: number;
  total_results?: number;
}
/* Generic type list movies */

/* discover movies */

export interface Results {
  adult?: boolean;
  backdrop_path?: null | string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path: null | string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  onListItemClick?: (movieId: number) => void;
}

export interface ResultListDiscoverData {
  data?: ListMoviesResponse<Results>;
  moviesDiscoverCurrentList?: Results[];
  onListItemClick?: (movieId: number) => void;
  isLoadingMoviesDiscover?: boolean;
}

/* discover movies */

/* results search movies */

export interface ResultSearchesMoviesData {
  data?: ListMoviesResponse<Results>;
  moviesSearchesCurrentList?: Results[];
  onListItemClick?: (movieId: number) => void;
  isLoadingMoviesResultsSearches?: boolean;
}

/* results search movies */

export interface MoviesState {
  moviesList?: MoviesListData[];
  movies?: MoviesListData[];
  data?: MoviesList[];
  isLoadingGetOnlineMovieDataBaseAutoComplete: boolean;
  overviewDetails: ResponseMovies;
  isLoadingOverviewDetails: boolean;
  errorOverviewDetails: null;
  fullCredits: FullCredits;
  isLoadingFullCredits: boolean;
  errorFullCredits: null;
  movieId: string;
  /* Nuevas peticiones de la api */
  moviesTrendingDay: ResultListTrendingData;
  isLoadingMoviesTrendingDay: boolean;
  errorMoviesTrendingDay: null;
  moviesDiscover: ResultListDiscoverData;
  moviesDiscoverCurrentList?: Results[];
  isLoadingMoviesDiscover: boolean;
  pageNumberCurrent: number;
  pageNumberIncrement: number;
  errorMoviesDiscover: null;
  movieDetails: ResultMovieDetailsData;
  isLoadingMovieDetails: boolean;
  errorMovieDetails: null;
  movieCredits: any;
  isLoadingMovieCredits: boolean;
  errorMovieCredits: null;
  moviesResultsSearches: ResultSearchesMoviesData;
  moviesSearchesCurrentList?: Results[];
  isLoadingMoviesResultsSearches: boolean;
  errorMoviesResultsSearches: null;
}
