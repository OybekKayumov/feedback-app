import React from 'react'

function Card({ children, reverse }) {
  // conditional class
  return (    
    <div className={`card ${reverse && 'reverse'}`}>      
      {children}
    </div>
  )
}

export default Card

// {/* Card */}
// <div  className='card reverse'>      

//class 'card' should be here and if reverse then we want the class of 'reverse'
// className={`card ${reverse && 'reverse'}`}>      