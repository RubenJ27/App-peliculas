import React from 'react'

import axios from "axios";
const baseURL = 'https://online-movie-database.p.rapidapi.com/auto-complete';

const ApiMovies = axios.create({ baseURL });


export default ApiMovies; 

