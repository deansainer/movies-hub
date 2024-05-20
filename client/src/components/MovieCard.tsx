import React, {FC, useState} from 'react'
import Movie from '../models/Movie';

interface MovieCardProps{
    movie: Movie;
    addToSaved: (movie: Movie) => void;
}

const MovieCard: FC<MovieCardProps> = ({movie, addToSaved}) => {


  return (
    <div className='movie_card'>
        <img onClick={() => addToSaved(movie)} className='movie_poster' src={movie.Poster}/>
    </div>
  )
}

export default MovieCard