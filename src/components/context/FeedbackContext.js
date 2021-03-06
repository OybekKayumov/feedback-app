import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)

  const [feedback, setFeedback] = useState([
    // {
    //   id: 1,
    //   text: 'This feedback item 1 is from context ',
    //   rating: 10
    // },
    // {
    //   id: 2,
    //   text: 'This feedback item 2 is from context ',
    //   rating: 9
    // },
    // {
    //   id: 3,
    //   text: 'This feedback item 3 is from context ',
    //   rating: 7
    // }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    console.log('123: ', 123);
    fetchFeedback();
  }, [])

  // fetch feedback : ?_sort=id&_order=desc: we want to get sorted by id
  const fetchFeedback = async () => {
    // const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json();

    console.log('data: ', data);
    setFeedback(data);

    setIsLoading(false);
  }

  // Add feedback, comes from APP.js feedbackContext vN32
  const addFeedback = async (newFeedback) => {
    // POST
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback),
    })

    // newFeedback.id = uuidv4() 
    // setFeedback([newFeedback, ...feedback]);
    const data = await response.json();  
    setFeedback([data, ...feedback]);
  }

  // Delete Feedback, comes from APP.js feedbackContext vN32
  const deleteFeedback = async (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      await fetch(`/feedback/${id}`, {
        method: 'DELETE'
      })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update Feedback Item 
  const updateFeedback = async (id, updItem) => {
    // console.log('id, updItem: ', id, updItem);
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    // setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item ))
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item ))
  } 

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return ( 
    <FeedbackContext.Provider 
      value={{
        feedback,
        deleteFeedback,
        isLoading,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;