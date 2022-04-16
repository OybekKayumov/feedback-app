import React from 'react'

function FeedbackStats({ feedback }) {
  // calculate rating average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  console.log(average);

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: 10</h4>
    </div>
  )
}

export default FeedbackStats