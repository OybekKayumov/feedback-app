import React from 'react'
import { useState } from 'react'

function RatingSelect() {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {}

  return (
    <ul className='rating'>
      <li>
        <input type='radio' id='num1' name='rating' value='1' onChange={handleChange} checked={selected === 1}/>
        <label htmlFor='num1'>1</label>
      </li>

    </ul>
  )
}

export default RatingSelect