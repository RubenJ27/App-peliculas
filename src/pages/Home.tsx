import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router";
import { InitialValues } from "../models/moviesSearchState";
import chairs from "../assets/chairs.png";
import { useDispatch, useSelector } from "react-redux";
/* import { setTitleSearch } from "../app/features/slices/moviesSlice"; */

export const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let initialValues: InitialValues = {
    param: "",
  };
  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleCleanClick = () => {
    setSearch("");
  };

  const handleSearchClick = () => {
    navigate(`/results/${search.replace(/\s/g, "+")}`);
    /* dispatch(setTitleSearch(search)); */
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="w-2/5">
          <img
            src={chairs}
            alt="Movie chairs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3/5 flex justify-center items-center flex-col px-10">
          <h2 className="text-4xl font-bold font-lato">Busca tu pelicula...</h2>
          <input
            value={search}
            onChange={handleInputChange}
            className="bg-special-gray font-lato w-full my-3 h-9 p-1 border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
          />
          <div className="flex w-full justify-between">
            <button
              className="bg-special-red hover:bg-red-600 text-white font-lato w-full shadow-lg h-11"
              style={{ width: "48%" }}
              onClick={handleSearchClick}
            >
              Buscar
            </button>
            <button
              className="bg-special-red hover:bg-red-600 text-white font-lato w-full shadow-lg h-11"
              style={{ width: "48%" }}
              onClick={handleCleanClick}
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
