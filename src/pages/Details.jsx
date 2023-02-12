import React, {useEffect} from 'react'

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieRatings } from "../app/features/actions/movies";

export const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { success, error, isFetching, isLoading, ratings } = useSelector((state) => state.moviesReducer);
  useEffect(() => {
    dispatch(fetchMovieRatings(movieId));
  }, [dispatch, movieId]);
  
  return (
    <>
        <h1>Details</h1>
    </>
  )
}