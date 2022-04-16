import React from 'react'

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      {/* List */}
      {feedback.map((item) => (
        <div>{item.rating}</div>
      ))}

    </div>
  )
}

export default FeedbackList

// console.log('feedback: ', feedback);