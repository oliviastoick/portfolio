import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-container'>
      <nav>
        <ul className='container'>
          <Link to='/portfolio'>
            <button className='nav'>Home</button>
          </Link>

          <Link to='/portfolio/about'>
            <button className='nav'>About</button>
          </Link>

          <Link to='/portfolio/projects'>
            <button className='nav'>Projects</button>
          </Link>

          <Link to='/portfolio/contact'>
            <button className='nav'>Contact</button>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
