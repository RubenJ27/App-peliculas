import axios from 'axios';

/* Base URL de la Api anterior 

const baseURL = axios.create({
  baseURL: 'https://online-movie-database.p.rapidapi.com',
});
const ApiMovies = baseURL;

export const BASE_URL = ApiMovies;

const baseURLAutocomplete = axios.create({
  baseURL: 'https://online-movie-database.p.rapidapi.com/auto-complete',
});
const ApiMoviesBase = baseURLAutocomplete;

export const BASE_URL_AUTOCOMPLETE = ApiMoviesBase; 

Base URL de la Api anterior */

const baseURL = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
const ApiMovies = baseURL;

export const BASE_URL = ApiMovies;

const baseURLSearch = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search',
});
const ApiMoviesBase = baseURLSearch;

export const BASE_URL_SEARCH = ApiMoviesBase;
