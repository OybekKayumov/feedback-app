import React from 'react'
import { useState } from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item')
  return (
    <div className='card'>
      {/* <div className='num-display'>10</div> */}
      <div className='num-display'>{ rating }</div>
      <div className='text-display'>{ text }</div>  
    </div>
  )
}

export default FeedbackItem