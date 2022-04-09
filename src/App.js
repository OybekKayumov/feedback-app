//todo: JSX
function App() {
  const title = 'Blog Post'
  const body = 'This is my blog post'

  return (
    <div className="container">
      <h1>{title}</h1>
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
