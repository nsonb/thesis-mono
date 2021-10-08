/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import Post from './Post'
import Upload from "./Upload";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const { data, fetchData } = useContext(DataContext)
  useEffect(() => {
    if(fetchData) fetchData()
  }, [])

  const renderedPosts = data?.map((item) => {
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