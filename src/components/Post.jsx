import React from 'react'
// import { useParams } from 'react-router-dom'
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom'

function Post() {
  const status = 200
  // const status = 404

  const navigate = useNavigate()

  const onClick = () => {
    console.log('btn clicked');
    navigate('/about')
  }

  if (status ===404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click to About</button>

      <Routes>
        <Route path='/show' element={<h1>Hello, Post/Show page</h1>} />
      </Routes>
    </div>
  )
}

export default Post


//
// function Post() {
//   const params = useParams()

//   return (
//     <div>
//       <h1>Post: {params.id}</h1>
//       <h1>Name: {params.name}</h1>
//     </div>
//   )