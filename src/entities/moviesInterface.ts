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

export interface Rating {
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
  ratings?: Rating;
  protSummary?: PlotSummary;
  year?: string;
  genres?: string[];
}
