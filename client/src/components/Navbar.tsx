import React, {FC} from 'react'
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <div className='navbar'>
    
        <Link className={'home_nav_link'} to={'/'}>Home Page</Link>
        <Link className={'nav_link'} to={'/saved'}>Saved</Link>
        <Link className={'nav_link'} to={'/history'}>History</Link>
        
        
        <span className='nav_signout'>Sign out</span>
  </div>
  )
}

export default Navbar