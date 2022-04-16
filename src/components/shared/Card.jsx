import React from 'react'

function Card({ children, reverse }) {
  // conditional class
  // return (    
  //   <div className={`card ${reverse && 'reverse'}`}>      
  //     {children}
  //   </div>
  // )

  // conditional style
  return (    
      <div className='card' style={{
        backgroundColor: reverse ? 'rgb(0, 0, 0, 0.4)' : '#fff',
        color: reverse ? '#fff' : '#000'
      }}>      
        {children}
      </div>
    )
}

// add default props
Card.defaultProps = {
  reverse: false,
}

export default Card

// {/* Card */}
// <div  className='card reverse'>      

//class 'card' should be here and if reverse then we want the class of 'reverse'
// className={`card ${reverse && 'reverse'}`}>      

// if reverse then we want bg color rgb(0, 0, 0, 0.4)
// else bg is #fff
// backgroundColor: reverse ? 'rgb(0, 0, 0, 0.4)' : '#fff',

// text color: if reverse then we want #fff
// else black
// color: reverse ? '#fff' : '#000'
