import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-container'>
      <nav>
        <ul className='container'>
          <Link to='/'>
            <button className='nav'>Home</button>
          </Link>

          <Link to='/about'>
            <button className='nav'>About</button>
          </Link>

          <Link to='/projects'>
            <button className='nav'>Projects</button>
          </Link>

          <Link to='/education'>
            <button className='nav'>Education</button>
          </Link>

          <Link to='/experience'>
            <button className='nav'>Experience</button>
          </Link>

          <Link to='/contact'>
            <button className='nav'>Contact</button>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
