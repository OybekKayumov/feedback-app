import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      {/* List */}
      {feedback.map((item) => (
        
        <FeedbackItem key={item.id} item={item} />
      ))}

    </div>
  )
}

export default FeedbackList

// console.log('feedback: ', feedback);

{/* <div>{item.rating}</div> */}