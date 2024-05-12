import React, {FC} from 'react'
import Movie from '../models/Movie'
import MovieCard from './MovieCard';

interface moviesList{
    moviesList: Movie[];
}

const MoviesList: FC<moviesList> = ({moviesList}) => {
  return (
    <div>
        <div className='cards'>
          <div className='card_container'>
            {moviesList.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default MoviesList