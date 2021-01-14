import { GET_MOVIES, ADD_MOVIES, DELETE_MOVIES, MOVIES_LOADING} from './types';

export const getMovies = () => dispatch => {
       dispatch(setmoviesLoading());

       // get MOVIES from local storage
       const returned = JSON.parse(localStorage.getItem('movie'));

      dispatch({
          type: GET_MOVIES,
          payload: returned
      })
       
}

export const addMovie = ({id, title, year}) => dispatch => {
        localStorage.setItem("movies",JSON.stringify({id,title,year}))
        dispatch({
            type: ADD_MOVIES,
            payload: { id, title, year }
        })
}

export const deleteMovie = (id) => dispatch => {
        dispatch({
            type: DELETE_MOVIES,
            payload: id
        })
}

export const setmoviesLoading = () => dispatch => {
    dispatch({
        type: MOVIES_LOADING
    })
}
