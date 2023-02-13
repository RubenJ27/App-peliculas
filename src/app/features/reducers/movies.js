import { 
    startFetchMovieRatings, 
    successFetchMovieRatings, 
    errorFetchMovieRatings,
    startFetchMovieDetails,
    successFetchMovieDetails,
    errorFetchMovieDetails
} from "../actions/movies";

const initialState = {
 isFetchingMovieRatings: false,
 isFetchingMovieDetails: false,
 isLoading: true,
 errorFetchingMovieRatings: null,
 successFetchingMovieRatings: null,
 errorFetchingMovieDetails: null,
 successFetchingMovieDetails: null,
 ratingsDetails: {},
 movieDetails: {}
};

const MoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case startFetchMovieRatings.toString():
        return {
            ...state,
            isLoading: false,
            isFetchingMovieRatings: true
        };
        case successFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                ratingsDetails: action.payload,
                successFetchingMovieRatings: true,
                errorFetchingMovieRatings: null
            };
        case errorFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                successFetchingMovieRatings: false,
                errorFetchingMovieRatings: action.payload.error,
                ratingsDetails: {},
            };
        case startFetchMovieDetails.toString():
            return {
                ...state,
                isFetchingMovieDetails: true,
            };
        case successFetchMovieDetails.toString():
            return {
                ...state,
                movieDetails: action.payload,
                isFetchingMovieDetails: false,
                successFetchingMovieDetails: true,
                errorFetchingMovieDetails: null,
                
            };
        case errorFetchMovieDetails.toString():
            return {
                ...state,
                isFetchingMovieDetails: false,
                successFetchingMovieDetails: false,
                errorFetchingMovieDetails: action.payload.error,
                movieDetails: {}
            };
        default:
            return state;
    }
};

export default MoviesReducer;