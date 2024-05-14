import React, {FC, useState} from 'react'
import Movie from '../models/Movie'


interface SavedMovieCardProps{
    savedMovie: Movie
}

const SavedMovieCard: FC<SavedMovieCardProps> = ({savedMovie}) => {
  return (
        <div className='movie_card'>
        <img className='movie_poster' src={savedMovie.Poster}/>
    </div>
  )
}

export default SavedMovieCard