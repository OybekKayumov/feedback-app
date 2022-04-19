import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink

// how to get
// http://localhost:3000/about?sort=name#hello
{/* <div className='about-link'>
      <Link to={{
        pathname: '/about',
        search: '?sort=name',
        hash: '#hello',
      }}>
        <FaQuestion size={30} />
      </Link>
</div> */}


//
{/* <div className='about-link'>
      <a href="/about">
        <FaQuestion size={30} />
      </a>
</div> */}