import { startFetchMovieRating, successFetchMovieRating, errorFetchMovieRating } from "../actions/movies";

const initialState = {
 isFetching: false,
 isLoading: true,
 error: null,
 success: null,
 ratings: {}
};

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case startFetchMovieRating.toString():
        return {
            ...state,
            isLoading: false,
            isFetching: true
        };
        case successFetchMovieRating.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                ratings: action.payload.data,
                success: true,
                
            };
        case errorFetchMovieRating.toString():
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                ratings: {},
                success: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};

export default MoviesReducer;