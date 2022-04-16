import React from 'react'
import { useState } from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item')

  const handleClick = () => {
    // rating = 10    :this is not works in react
    // setRating(10)
    // setRating(() => {
    setRating((prev) => {
      console.log('prev: ', prev);
      return prev + 1;
    })
  }
  return (
    <div className='card'>
      {/* <div className='num-display'>10</div> */}
      <div className='num-display'>{ rating }</div>
      <div className='text-display'>{ text }</div>
      <button onClick={handleClick}>Click</button>  
    </div>
  )
}

export default FeedbackItem