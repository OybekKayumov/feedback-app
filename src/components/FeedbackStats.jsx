import React from 'react'
// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'


// function FeedbackStats({ feedback }) {
function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  // calculate rating average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: { isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats

// if output is NaN, we will show a zero 
// here is a function called isNaN
// ternary operator : if isNaN than show 0, else show average
// { isNaN(average) ? 0 : average}

// makes one decimal place
// average = average.toFixed(1)

// if 9.0 than show 9. Remove decimal if it is a zero
// average = average.toFixed(1).replace(/[.,]0$/, '')