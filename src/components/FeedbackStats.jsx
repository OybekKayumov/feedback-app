import React from 'react'

function FeedbackStats({ feedback }) {
  // calculate rating average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: { isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats

// if output is NaN, we will show a zero 
// here is a function called isNaN
// ternary operator : if isNaN than show 0, else show average
// { isNaN(average) ? 0 : average}