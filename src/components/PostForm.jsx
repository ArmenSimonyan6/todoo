import React from 'react'

const PostForm = ( {post, setPost, addNewPoost }) => {
  return (
    <form onSubmit={addNewPoost}>
        <input value={post.name} placeholder='Name' onChange={(e) => setPost({
            ...post,
            name: e.target.value
        })}/>
        <button>Add</button>
    </form>
  )
}

export default PostForm