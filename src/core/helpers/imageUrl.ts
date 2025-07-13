// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention
export function imageUrlMoviesList(poster_path: string | null): string {
  const urlMovieImg = 'https://image.tmdb.org/t/p/w300/';
  const viewMovieImage = `${urlMovieImg}${poster_path}`;

  return viewMovieImage;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention
export function imageUrlMovie(poster_path: string | null): string | undefined {
  const urlMovieImg = 'https://image.tmdb.org/t/p/w300/';
  const viewMovieImage = `${urlMovieImg}${poster_path}`;
  return viewMovieImage;
}
