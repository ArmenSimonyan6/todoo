import React from 'react'
import PostItem from '../components/PostItem'

const PostList = ({ posts }) => {
  return (
    <div>
        {
            posts.map((post) => <PostItem post={post}/> )
        }
    </div>
  )
}

export default PostList