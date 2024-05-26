import React from 'react'
import { resolve } from 'styled-jsx/css';

async function  PostDetails({postId}) {

    await new Promise((resolve) =>{
        setTimeout(()=>{
            resolve();
        }, 2000)
    })

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}` , {
      next : {
        revalidate : 120
      }
    })

    const post = await response.json()
  return (
    <>
    <div style={{background : "#444" , padding : "20px" , margin : "20px" , borderRadius : "20px"}}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
    </>
  )
}

export default PostDetails
