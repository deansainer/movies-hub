import React, {FC} from 'react'
import { Link, useLocation  } from 'react-router-dom';
import MovieForm from './MovieForm';
import Movie from '../models/Movie';

interface NavbarProps{
  updateMoviesList: (moviesList: Movie[]) => void;
}
const Navbar: FC<NavbarProps> = ({updateMoviesList}) => {
  const location = useLocation();

  return (
    <div className='movie_navbar'>
    
        <Link className='home_nav_link' to={'/'}>Movie Hub<img className='home_page_img' src='https://cdn-icons-png.flaticon.com/128/3172/3172625.png'/></Link>
        <Link className='movie_nav_link' to={'/saved'}>Saved</Link>
        <Link className='movie_nav_link' to={'/history'}>History</Link>
        {location.pathname === '/' && <MovieForm updateMoviesList={updateMoviesList} />}
        
        
        <span className='nav_signout'>Sign out</span>
  </div>
  )
}

export default Navbar