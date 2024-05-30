import React, {FC, useState} from 'react'
import MovieForm from './MovieForm'
import MoviesList from './MoviesList'
import Movie from '../models/Movie'

interface HomePageProps{
  updateMoviesList: (moviesList: Movie[]) => void;
  moviesList: Movie[];
  addToSaved: (movie: Movie) => void;
}

const HomePage: FC<HomePageProps> = ({updateMoviesList, moviesList, addToSaved}) => {

  return (
    <div className='home_page'>
      <MoviesList moviesList={moviesList} addToSaved={addToSaved} />
    </div>
  )
}

export default HomePage