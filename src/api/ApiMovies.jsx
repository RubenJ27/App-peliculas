import React from 'react'

import axios from "axios";


const baseURL = 'https://www.omdbapi.com/';

const moviesApi = axios.create({ baseURL })

export default moviesApi; 

