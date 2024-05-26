import React, {FC} from 'react'
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <div className='movie_navbar'>
    
        <Link className='home_nav_link' to={'/'}>Movie Hub<img className='home_page_img' src='https://cdn-icons-png.flaticon.com/128/3172/3172625.png'/></Link>
        <Link className='movie_nav_link' to={'/saved'}>Saved</Link>
        <Link className='movie_nav_link' to={'/history'}>History</Link>
        
        
        <span className='nav_signout'>Sign out</span>
  </div>
  )
}

export default Navbar