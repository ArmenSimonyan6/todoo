import React from 'react'

const PostItem = (props) => {
  return (
    <div>
        <div className="name">{props.post.name}</div>
        <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
    </div>
  )
}

export default PostItem