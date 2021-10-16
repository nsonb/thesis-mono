/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import Post from './Post'
import Upload from "./Upload";
import { DataContext } from "../context/DataContext";
import styled from "@emotion/styled";

const PostContainer = styled.div`
  width: 35vw;
  min-width: 480px;
  margin: auto;
  margin-top: 1rem;
  box-sizing: border-box;
`
const Home = () => {
  const { data, fetchData } = useContext(DataContext)
  useEffect(() => {
    if(fetchData) fetchData()
  }, [])

  const renderedPosts = data?.sort((el1, el2)=> el2.id - el1.id).map((item) => {
    return (
      <Post post={item} key={item.id}/>
    )
  })

  return (
    <PostContainer>
      <Upload/>
      {renderedPosts}
    </PostContainer>
  )
}

export default Home;