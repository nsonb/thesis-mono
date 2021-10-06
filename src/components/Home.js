import { useEffect, useState } from "react";
import Post from './Post'
import Upload from "./Upload";
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

  const renderedPosts = posts?.map((item) => {
    return (
      <Post post={item} key={item.title}/>
    )
  })

  return (
    <div>
      <Upload/>
      {renderedPosts}
    </div>
  )
}

export default Home;