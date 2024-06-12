import React from 'react'
import PostItem from '../components/PostItem'

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
        {
            posts.map((post) => <PostItem deletePost={deletePost} post={post}/> )
        }
    </div>
  )
}

export default PostList