import React, {FC} from 'react'
import { IoMdAddCircle } from "react-icons/io";
import Movie from '../models/Movie';

interface MovieCardProps{
    movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({movie}) => {
  return (
    <div className='movie_card'>
        <img src='https://cdn-icons-png.flaticon.com/128/8377/8377219.png' className='save_icon'/>
        <img className='movie_poster' src={movie.Poster}/>
    </div>
  )
}

export default MovieCard