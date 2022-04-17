import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
// hook
import { useState } from 'react'
import RatingSelect from './RatingSelect'


function FeedbackForm() {
  const [text, setText] = useState('')
  //add rating
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect/>        
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

{/* todo - rating select component */}
{/* <RatingSelect/>         */}


// how to read: if there is a message, then lets have a div with className of message, inside actual {message}
// {message && <div className='message'></div>}


{/* <Button type='submit' version='secondary'>Send</Button> */}

{/* <button type='submit'>Send</button> */}