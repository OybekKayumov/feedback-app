import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
// import FeedbackItem from "./components/FeedbackItem.jsx"
import FeedbackList from "./components/FeedbackList.jsx"
import FeedbackData from "./data/FeedbackData"
// import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

//todo: JSX
function App() {
  const [feedback, setFeedback] = useState (FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log('newFeedback: ', newFeedback);
    // take all objects from feedback, and before them put newFeedback
    // all the current items and add a new
    // and add it into UI 
    setFeedback([newFeedback, ...feedback]);
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <Router>      
      <Header /> 
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={ feedback } /> 
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </>
          }>
            
          </Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        
        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App

//changed to JSX element
{/* <Route path='/about' component={AboutPage} /> */}

{/* <Route path='/about'>This is the about route</Route> */}


// newFeedback.id = uuidv4()
// {
//   "text": "this is a test 3",
//   "rating": 5,
//   "id": "be8c8e44-2932-4b20-8470-25f473b23f2f"
// }

// console.log('newFeedback: ', newFeedback);
// {
//   "text": "this is a test 2",
//   "rating": 3
// }

// if true 
// if(window.confirm('Are you sure you want to delete?'))
// create new array such as 'feedback' with filter and loops through like forEach and map. But you can set a condition to filter out item that item.id is not equal to id that being passed in

// this feedback will is going to return an array minus the one we're deleting and then that's what we're setting the feedback to using set feedback
// feedback.filter((item) => item.id !== id)


// import React from "react";
//todo: Regular JS
// function App() {
//   return React.createElement('div', { className: 'container' },
//          React.createElement('h1', {}, 'My App')
//   )
// }

//

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello from the app component</h1>
//       <p>My App</p>

//       <label htmlFor=""></label>
//     </div>
//   )
// }

//
// function App() {
//   const title = 'Blog Post'
//   const body = 'This is my blog post'

//   return (
//     <div className="container">
//       <h1>{title}</h1>
//       <p>{body}</p>
//       { 5 + 5 }
//       { Math.random() * (5 + 5) }
//       <h2>{title.toUpperCase()}</h2>

//     </div>
//   )
// }

//
// function App() {
//   const title = 'Blog Post'
//   const body = 'This is my blog post'
//   const comments = [
//     {id: 1, text: 'Comment One'},
//     {id: 2, text: 'Comment Two'},
//     {id: 3, text: 'Comment Three'},
//   ]

//   condition
//   const loading = false
//   const showComments = true

//   if (loading) return <h1>Loading...</h1>

//   const commentBlock = (
//     <div className="comments">
//         <h3>Comments ({ comments.length })</h3>
//         <ul>
//           { comments.map((comment, index) => (
//             <li key={index}>{comment.text}</li>
//           ))}

//         </ul>
//       </div>
//   )

//   return (
//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>      
//       <p>{body}</p>

//       {/* condition: if showComments is true than output 'yes' */}
//       {/* ? --> && */}
//       {/* if showComments true than show <div> */}
//       { showComments && commentBlock }   

//     </div>
//   )
// }

//
{/* <Header text="Hello React"/> */}
{/* <Header /> */}

{/* <Header text={ true }/>  */}
{/* error in console */}

//
{/* <Header bgColor='green' textColor="#fff" />  */}