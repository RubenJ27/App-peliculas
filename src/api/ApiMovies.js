import axios from "axios";

const baseURL = axios.create({
  baseURL: 'https://online-movie-database.p.rapidapi.com'
});
const ApiMovies = baseURL;

export const BASE_URL = ApiMovies;

const baseURLAutocomplete = axios.create({
    baseURL: 'https://online-movie-database.p.rapidapi.com/auto-complete'
  });
const ApiMoviesBase = baseURLAutocomplete;

export const BASE_URL_AUTOCOMPLETE = ApiMoviesBase; 


