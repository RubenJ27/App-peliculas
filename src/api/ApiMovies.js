
import axios from "axios";

const baseURL = axios.create({
    baseURL: 'https://online-movie-database.p.rapidapi.com/auto-complete'
  });
const ApiMoviesBase = baseURL;

export const BASE_URL = ApiMoviesBase; 

const baseURLRatings = axios.create({
    baseURL: 'https://online-movie-database.p.rapidapi.com'
  });
const ApiMoviesRatings = baseURLRatings;

export const BASE_URL_RATINGS = ApiMoviesRatings;

const baseURLOverviewDetails = axios.create({
  baseURL: 'https://online-movie-database.p.rapidapi.com'
});
const ApiMoviesOverviewDetails = baseURLRatings;

export const BASE_URL_OVERVIEW_DETAILS = ApiMoviesRatings;
