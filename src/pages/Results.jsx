import React from 'react'
import { useParams } from "react-router";
import movieTheater from "../assets/movie-theater.png";

export const Results = () => {
  const { title } = useParams();
  console.log(title);
  return (
    <>
      <div className="flex flex-row h-screen overflow-hidden">
        <div className="w-3/5 flex justify-center items-center flex-col px-10">
          <h2 className="text-4xl font-bold font-lato">Busca tu pelicula...</h2>
          <input
            className="bg-special-gray font-lato w-full my-3 h-9 p-1 border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
          />
          <div className="flex w-full justify-between">
            <button 
            className="bg-special-red hover:bg-red-600 text-white font-lato w-full shadow-lg h-11"
            style={{ width: "48%" }}
            >
              Buscar
            </button>
            <button className="bg-special-red hover:bg-red-600 text-white font-lato w-full shadow-lg h-11"
            style={{ width: "48%" }}
            >
              Limpiar
            </button>
          </div>
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