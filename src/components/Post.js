import styled from "@emotion/styled"
import { default_theme } from "../common/Colors"

const PostContainer = styled.div`
  background-color: ${default_theme.second};
  color: ${default_theme.dark_grey};
  padding: .5rem;
  font-family: 'Open Sans', sans-serif;
  width: 100%;

`

const Post = (props) => {
  return (
    <PostContainer>
      {props.post.title}
    </PostContainer>
  )
}

export default Post