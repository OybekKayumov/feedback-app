import React from 'react'

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  
  return (
    <div>
      List
    </div>
  )
}

export default FeedbackList

// console.log('feedback: ', feedback);