import { GET_MOVIES, ADD_MOVIES, DELETE_MOVIES, MOVIES_LOADING} from '../actions/types';

const initialState = {
      movies: [],
      loading: false
};

const rootReducer = ( state = initialState, action) => {
    switch(action.type){
        case GET_MOVIES:
            return{
                ...state,
                movies: action.payload,
                loading: false
            };
        
        case DELETE_MOVIES: 
            return{
                ...state,
                movies: state.movies.filter
                (movie => movie.id !== action.payload)
            };

        case ADD_MOVIES: 
            return{
                ...state,
                movies: [action.payload, ...state.movies],
                loading: true
            };
        
        default:
            return state;

    }
}

export default rootReducer;