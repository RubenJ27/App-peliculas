import React, { useState ,useEffect } from 'react'

import axios from "axios";
import { useParams } from "react-router";
import movieTheater from "../assets/movie-theater.png";
import ApiMovies from "../api/ApiMovies";
import Loading from "./components/Loading";
import ResultList from "./components/ResultList";

export const Results = () => {
  const { title } = useParams();
  const headers = {
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY
  }
   /* api */
   const [getMovies, setGetMovies] = useState([]);

   useEffect(() => {
    obtainMovies();
  }, []);
  
 
   const obtainMovies = async () => {
    
   };

   axios.get(`https://online-movie-database.p.rapidapi.com/auto-complete/?q=${title}`, { headers: { "X-RapidAPI-Key": AuthStr, "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"} })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))

   console.log(getMovies)
 
    /* console.log(!Object.entries(getMovies).length); */

   if (!Object.entries(getMovies).length) {
    return(
    <div className="flex justify-center items-center mt-72">
      <Loading />
    </div>
    );
  }else {
      <div className="flex justify-center items-center mt-72">
        Hubo error por favor recargue la pagina
      </div>
  }

  return (
    <>
      <div className="flex flex-row h-screen overflow-hidden">
        <div className="w-3/5 flex justify-center items-center flex-col px-10 overflow-y-auto">
         <ResultList data={getMovies}/>
        </div>
        <div className="w-2/5">
          <img
            src={movieTheater}
            alt="Movie Theater"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}