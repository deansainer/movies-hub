import React, {FC} from 'react'
import Movie from '../models/Movie'
import MovieCard from './MovieCard';

interface moviesList{
    moviesList: Movie[],
    addToSaved: (movie: Movie) => void;
}

const MoviesList: FC<moviesList> = ({moviesList, addToSaved}) => {
  return (
    <div>
        <div className='cards'>
          <div className='card_container'>
            {moviesList.map((movie) => (
              <MovieCard movie={movie} addToSaved={addToSaved}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default MoviesList