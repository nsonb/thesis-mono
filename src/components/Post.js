import styled from "@emotion/styled"
import { useEffect } from "react"
import { default_theme } from "../common/Colors"

const PostContainer = styled.div`
  position: relative;
  background-color: ${default_theme.dark_grey};
  color: ${default_theme.second};
  padding: 1rem;
  padding-bottom: .6rem;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  margin-top: 1.2rem;
  height: fit-content;
  border-radius: .5rem;
  box-sizing: border-box;
  
`
const PostAuthor = styled.div`
  display: box;
  position: absolute;
  top: -.7rem;
  left: .5rem;
  padding: .3rem;
  font-size: .6rem;
  color: ${default_theme.main};
  width: fit-content;
  background-color: ${default_theme.grey};
  border-radius: .2rem;
`

const Post = (props) => {
  useEffect(() => {
    console.log(props.post)
  })
  return (
    <PostContainer>
      <div>{props.post.title}</div>
      <PostAuthor>{props.post.author}</PostAuthor>
      <div>{props.post.content.text}</div>

      
    </PostContainer>
  )
}

export default Post