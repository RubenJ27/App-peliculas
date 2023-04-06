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
export interface ResultListData {
  data?: MoviesListData[];
  onListItemClick: (movieId: string) => void;
}
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
}
