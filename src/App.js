import { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {

  const [posts, setPosts] = useState([])
  const [post, setPost] = useState("")

  const addNewPost = (e) => {
    e.preventDefault()

    if(!post.name) return

    setPosts([
      ...posts,
      {
        id: new Date().getTime(),
        name: post.name
      }
    ])

    setPost({
      ...post,
      name: ""
    })
  }

  return (
    <div className="App">
      <PostForm addNewPoost={addNewPost} setPost={setPost} post={post}/>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
