import React, {FC, useState} from 'react'
import Movie from '../models/Movie';

interface MovieCardProps{
    movie: Movie;
    addToSaved: (movie: Movie) => void;
}

const MovieCard: FC<MovieCardProps> = ({movie, addToSaved}) => {


  return (
    <div className='movie_card'>
        <img onClick={() => addToSaved(movie)} src='https://cdn-icons-png.flaticon.com/128/8377/8377219.png' className='save_icon'/>
        <span className='movie_title'>{movie.Title}</span>
        <img className='movie_poster' src={movie.Poster}/>
    </div>
  )
}

export default MovieCard