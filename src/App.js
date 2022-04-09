//todo: JSX
function App() {
  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
    {id: 1, text: 'Comment One'},
    {id: 2, text: 'Comment Two'},
    {id: 3, text: 'Comment Three'},
  ]

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>      
      <p>{body}</p>
      

    </div>
  )
}

export default App

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