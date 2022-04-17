import React from 'react'
import Card from './shared/Card'
// hook
import { useState } from 'react'

function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    console.log('e :', e.target.value);
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* todo - rating select component */}
        <div className='input-group'>
          <input onChange={handleTextChange} type='text' placeholder='Write a review'></input>
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm