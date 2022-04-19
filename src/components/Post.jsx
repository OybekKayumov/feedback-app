import React from 'react'
// import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function Post() {
  const status = 200
  return (
    <div>
      <h1>Post</h1>
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