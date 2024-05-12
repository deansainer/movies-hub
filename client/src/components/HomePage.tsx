import React, {FC} from 'react'
import MovieForm from './MovieForm'
import MoviesList from './MoviesList'
import Movie from '../models/Movie'

interface HomePageProps{
  updateMoviesList: (moviesList: Movie[]) => void;
  moviesList: Movie[];
}

const HomePage: FC<HomePageProps> = ({updateMoviesList, moviesList}) => {
  return (
    <div className='home_page'>
      <MovieForm updateMoviesList={updateMoviesList} />
      <MoviesList moviesList={moviesList}/>
    </div>
  )
}

export default HomePage