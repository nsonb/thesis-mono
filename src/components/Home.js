import { useEffect, useState } from "react";
import Post from './Post'
import instance from "../axios/api";

const Home = () => {
  const [ posts, setPosts ] = useState()
  useEffect(() => {
    instance
      .get('/posts')
      .then((res) => {
        setPosts(res.data)
      })
  }, [])
  return (
    <div>
      { posts ? (
        <div>
          {posts[0].title}
        </div>
      ): null }
    </div>
  )
}

export default Home;