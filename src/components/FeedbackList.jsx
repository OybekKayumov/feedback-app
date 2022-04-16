import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      {/* List */}
      {feedback.map((item) => (
        
        <FeedbackItem 
          key={item.id} 
          item={item} 
          handleDelete={handleDelete}/>
      ))}

    </div>
  )
}

FeedbackList.propTypes = {
  // feedback: PropTypes.array
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    })
  ),  
}

export default FeedbackList

//
// handleDelete={(id) => console.log(id)}/>

// console.log('feedback: ', feedback);

{/* <div>{item.rating}</div> */}