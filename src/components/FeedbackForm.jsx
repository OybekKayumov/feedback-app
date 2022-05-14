import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
// hook
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'


// function FeedbackForm({handleAdd}) {
  function FeedbackForm() {
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

  const [text, setText] = useState('')
  //add rating
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // console.log('Hello, useEffect');
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    // check for text
    if (text === '') {
      setBtnDisabled(true)
      // nothing to show
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim().length > 10) {
      // create short object
      const newFeedback = {
        // text: text,
        text,
        rating
      }

      // console.log('newFeedback: ', newFeedback);
      // handleAdd(newFeedback);
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }

      // clear text field after submit
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>        
        <div className='input-group'>
          <input 
            onChange={handleTextChange} 
            type='text' 
            placeholder='Write a review'
            value={ text }
          />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

// object console.log('newFeedback: ', newFeedback);
// {
//   "text": "this is a test",
//   "rating": 8
// }

{/* todo - rating select component */}
{/* <RatingSelect/>         */}


// how to read: if there is a message, then lets have a div with className of message, inside actual {message}
// {message && <div className='message'></div>}


{/* <Button type='submit' version='secondary'>Send</Button> */}

{/* <button type='submit'>Send</button> */}