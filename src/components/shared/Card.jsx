import React from 'react'

function Card({ children, reverse }) {
  return (
    <div  className='card reverse'>      
      {children}
    </div>
  )
}

export default Card

// {/* Card */}