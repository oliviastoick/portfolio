import React from 'react'

const Projects = () => {
  return (
    <div className='container'>
      <h3 className='project-header'>Projects</h3>
      <a className='project-link' href='https://warm-earth-42347.herokuapp.com/'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvWO5hEcuwW9wKWONjByr0LQu7o-elgK81kriX_FESFraUcq_' className='project-img' /> </a>
      <a className='project-link' href='https://appy-hour.herokuapp.com/'>

        {/* //img taken from https://library.med.utah.edu/blog/eccles/files/2014/02/Appy-Hour-Logo-without-border.png */}
        <img src='https://library.med.utah.edu/blog/eccles/files/2014/02/Appy-Hour-Logo-without-border.png' className='project-img' /> </a>
      <a className='project-link' href='https://warm-earth-42347.herokuapp.com/'>
        <img src='wallz.png' className='project-img' /> </a>
    </div>
  )
}

export default Projects
