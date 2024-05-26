import PostDetails from '@/app/component/PostDetails';
import React, { Suspense } from 'react'

async function  PostDetailsPage({params}) {
  const loadingPost = (<><div><h1 style={{color : "#fa4" , fontSize : "30px"}}>Loading ...</h1></div></>)
const postId = params.postId;
  return (
    <>
    <div>
     <h1>Post Details </h1>
    </div>

    <Suspense  fallback={loadingPost}>
        <PostDetails postId={postId} />
    </Suspense>
    </>
  )
}

export default PostDetailsPage
