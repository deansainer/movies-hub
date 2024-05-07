import React, {FC} from 'react'
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <div className='navbar'>
    
        <Link className={'home_nav_link'} to={'/'}>Home Page</Link>
        <Link className={'nav_link'} to={'/saved'}>Saved</Link>
        
      <div className='signout_div'>
        <span className='sign_out_nav'>Sign out</span>
      </div>
  </div>
  )
}

export default Navbar