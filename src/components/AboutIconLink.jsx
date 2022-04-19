import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink


{/* <div className='about-link'>
      <a href="/about">
        <FaQuestion size={30} />
      </a>
</div> */}