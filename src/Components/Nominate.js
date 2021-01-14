import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies, addMovie, deleteMovie } from '../modules/actions/movieActions';
import PropTypes from 'prop-types';


function Nominate(props) {
const [films, setFilms] = useState([]);
const [term,setTerm] = useState('');
const [movie, setMovie] = useState([])
const [isloading, setIsloading] = useState(true);

console.log(props)
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com/?s=fast&apikey=${API_KEY}`

   //get movies from Omdb
useEffect(() => {
        axios.get( `http://www.omdbapi.com/?s=fast&apikey=${API_KEY}`)
        .then(res => {
            setFilms([...res.data.Search])
              } )
        .catch(err => console.log(err));
      }, [ ])

      console.log(props.movie.movies)
 // gets movies from redux 

 
    
    const deleteHandler = (id) => {
        props.deleteMovie(id);
    } 
  
    const onchangeHandler = (e) => {
        setTerm(e.target.value);
        console.log(term);
    }
     
    // addmovie to local strorage and redux.
    const onNominate = (id, title, year) => {
         const film = {
             id, title, year
         }
         

          props.addMovie(film);
    }
      
    //const { }
   
    return(
        
        <div>
         <div>
            <form>
                 <div>
                    <input onChange = { onchangeHandler } value= {term} />
                </div>
                <span>
                    <button > Go!</button>
                </span>

            </form>
         </div>
         { films.map(({ Title, Poster, imdbID, Year }) => (
              <section className="mt-8" key= {imdbID}>
                <div>
                  <img src={Poster} />
                  <div>
                      <span>{Title}</span>
                      <span>{Year}</span>
                  </div>
                  <div>
                      <button onClick={()=> onNominate(imdbID, Title, Year)}><span>Nominate</span></button>
                  </div>
              </div>

          </section>
         ))}

         
         {props.movie.movies.map(({title, id, year})  => (
                <div>
                    <h1>{title}</h1>
                    <h1>{id}</h1>
                    <h1>{year}</h1>
                    <button onClick = {() => deleteHandler(id)}>x</button>
                </div>
         ))}
        
         
         
    </div>
    );
}

Nominate.propTypes = {
    getMovies: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
    addMovie: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    movie: state.movie,
    loading: state.movie.loading
})
export default connect(mapStateToProps, 
    {getMovies, deleteMovie, addMovie})(Nominate);