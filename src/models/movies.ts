export interface PlanListData {
  items: any[];
  next_page?: number;
  page: number;
  pages: number;
  previous_page?: number;
  size: number;
  total: number;
}
interface ImageUrlData {
  height?: number;
  imageUrl?: string;
  width?: number;
}
export interface ResultListData {
  data: MoviesListData[];
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

export interface OverviewDetailsImageData {
  height?: number;
  id?: string;
  url?: string;
  width?: number;
}

export interface OverviewDetailsTitleData {
  image?: OverviewDetailsImageData;
}

export interface OverviewDetailsData {
  id?: string;
  title?: OverviewDetailsTitleData;
  ratings?: object;
  genres?: [];
  protSummary?: object;
}
export interface FullCredits {}
export interface PropsMessageLoading {
  messageLoading: string;
}
export interface MoviesState {
  moviesList?: MoviesListData[];
  movies?: MoviesListData[];
  data?: MoviesList[];
  isLoadingGetOnlineMovieDataBaseAutoComplete: boolean;
  overviewDetails: OverviewDetailsData;
  isLoadingOverviewDetails: boolean;
  errorOverviewDetails: null;
  /* fullCredits: FullCredits; */
  isLoadingFullCredits: boolean;
  errorFullCredits: null;
  movieId: string;
}
